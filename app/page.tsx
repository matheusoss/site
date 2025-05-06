import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Highlight } from '@/components/highlight'
import { TechStack } from '@/components/techstack'

export default function Home() {
  return (
    <div className="@container-main max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">👋</span>
      <Heading>Hello there! I&apos;m Matheus Oliveira</Heading>
      <Paragraph>
        I&apos;m a software engineer with a passion for building scalable and efficient systems. I&apos;m currently
        working as a software engineer at <Highlight>Google</Highlight> and <Highlight>Meta</Highlight>.
      </Paragraph>
      <TechStack />
    </div>
  )
}
