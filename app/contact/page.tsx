import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Cal } from '@/components/cal';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';

const title = 'Contact';
const email = 'matheusoss@hotmail.com';
const description = `Contact me by email ${email} or schedule a meeting.`;

export const metadata: Metadata = createMetadata({
  title,
  description,
  ogText: 'Want to chat about something? Get in touch.',
});

export default function Contact() {
  return (
    <>
      <Section className="gap-0">
        <h1>{title}</h1>
        <p className="text-foreground-lighter">
          Contact me by email <Link href={`mailto:${email}`}>{email}</Link> or
          schedule a meeting.
        </p>
      </Section>

      <Section delay={0.2}>
        <Suspense fallback={null}>
          <Cal />
        </Suspense>
      </Section>
    </>
  );
}
