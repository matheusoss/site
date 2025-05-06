import { Heading } from '@/components/heading'
import { Highlight } from '@/components/highlight'
import { Paragraph } from '@/components/paragraph'
import { Products } from '@/components/products'
import { TechStack } from '@/components/techstack'
import { IconMapPinFilled } from '@tabler/icons-react'

export default function Home() {
  return (
    <div className="@container-main max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">👋</span>
      <Heading>Hello there! I&apos;m Matheus Oliveira</Heading>

      <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl flex items-center">
        <IconMapPinFilled className="inline-block" size={15} /> São Paulo, Brazil
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I’m a Software and Data Engineer with over 3 years of hands-on experience building scalable and robust systems.
        I specialize in Python, Node.js, Azure, Airflow, and SQL— developing data pipelines, backend services, and
        automation solutions that drive real business impact.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I’ve optimized critical processes, achieving a 98% reduction in system response times through architectural
        improvements and database query redesign. I’ve also partnered with BI teams to deliver actionable insights
        through Power BI dashboards.
      </Paragraph>
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Projects I'm working on
      </Heading>
      <Products />
      <TechStack />
    </div>
  )
}
