import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { Products } from '@/components/products'

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10 mt-3"> What I&apos;am working on</Heading>
      <Products/>
    </Container>
  )
}
