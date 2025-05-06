import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About | Matheus Oliveira',
  description:
    'Matheus Oliveira is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.',
}

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  )
}
