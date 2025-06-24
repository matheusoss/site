import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Cal } from '@/components/cal';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';

const title = 'Contato';
const email = 'matheusoss@hotmail.com';
const description = `Entre em contato comigo por email ${email} ou agende uma reunião.`;

export const metadata: Metadata = createMetadata({
  title,
  description,
  ogText: 'Quer conversar sobre algo? Entre em contato.',
});

export default function Contact() {
  return (
    <>
      <Section className="gap-0">
        <h1>{title}</h1>
        <p className="text-foreground-lighter">
          Entre em contato comigo por email{' '}
          <Link href={`mailto:${email}`}>{email}</Link> ou agende uma reunião.
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
