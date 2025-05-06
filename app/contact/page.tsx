import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { Cal } from '@/components/cal'
import { Paragraph } from '@/components/paragraph'
import { Highlight } from '@/components/highlight'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Matheus Oliveira',
  description: 'Contact me',
}

export default function Contact() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Contact me by email <Highlight>matheusoss@hotmail.com</Highlight> or schedule a meeting.
      </Paragraph>
      <Cal />
    </Container>
  )
}
