import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1).startsWith('re_'),
    RESEND_AUDIENCE_ID: z.string().min(1),
    RESEND_TO: z.string().email().min(1),

    // Added by Vercel
    VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
    RESEND_TO: process.env.RESEND_TO,
  },
});
