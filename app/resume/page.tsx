import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { WorkResume } from '@/components/work-resume'
import { Highlight } from '@/components/highlight'
export default function Resume() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading>Resume</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkResume />
    </Container>
  )
}
