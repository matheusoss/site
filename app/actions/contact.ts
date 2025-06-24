'use server';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { env } from '@/lib/env';
import { resend } from '@/lib/resend';


export const contact = async (
  formData: FormData
): Promise<{
  message: string;
  error: string;
}> => {
  const head = await headers();

  const ip = head.get('x-forwarded-for');
  const redis = Redis.fromEnv();
  const ratelimit = new Ratelimit({
    redis,
    // rate limit to 1 request every day
    limiter: Ratelimit.slidingWindow(1, '1d'),
  });

  const { success } = await ratelimit.limit(`ratelimit_${ip}`);

  if (!success) {
    return {
      error: 'You have reached your request limit. Please try again later.',
      message: '',
    };
  }

  const { name, email, message, subject } = Object.fromEntries(formData);

  // This is a honeypot field - if it's filled, it's likely a bot.
  // Fuck you, bots.
  if (typeof subject === 'string' && subject.length) {
    return {
      message: 'Thanks! Your message has been sent.',
      error: '',
    };
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return {
      error: 'Please fill in all fields.',
      message: '',
    };
  }

  const response = await resend.emails.send({
    from: env.RESEND_TO,
    to: env.RESEND_TO,
    subject: `New message from ${name}`,
    replyTo: email,
    text: message,
  });

  if (response.error) {
    return {
      error: response.error.message,
      message: '',
    };
  }

  revalidatePath('/contact');

  return {
    message: 'Thanks! Your message has been sent.',
    error: '',
  };
};
