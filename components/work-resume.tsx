import { IconCircleCheckFilled } from '@tabler/icons-react'
import { Heading } from './heading'
import { Paragraph } from './paragraph'

export const WorkResume = () => {
  const timeline = [
    {
      company: 'Virgo Securitizadora',
      title: 'Data Engineer',
      date: 'Mar 2022 - Jan 2025',
      description:
        'Development of efficient data pipelines and automated solutions using Python, SQL, Azure, Apache Airflow and Power BI. Responsible for building and managing robust and scalable data infrastructure to meet data collection, processing, storage and analysis needs.',
      responsibilities: [
        'Developed and maintained data pipelines for data extraction, transformation, and loading into Azure Data Lake and Azure SQL Database.',
        'Implemented Apache Airflow workflows for automated data processing and orchestration.',
        'Used Airflow to move data from Azure Data Lake to Azure SQL Database.',
        'Created Power BI dashboards for data visualization and reporting.',
        'Optimized data processing workflows to reduce processing times and improve data quality.',
        'Collaborated with cross-functional teams to understand data requirements and provide technical support.',
      ],
    },
    {
      company: 'Itaú Unibanco',
      title: 'Credit Analyst',
      date: 'Jan 2021 - Jan 2022',
      description:
        "Work in the bank's commercial area, providing support for prospecting new clients and in qualitative and quantitative analysis.",
      responsibilities: [
        "Provided commercial support to client acquisition efforts, helping to grow the bank's customer base. ",
        'Performed qualitative and quantitative credit analyses to support informed credit decisions.',
        'Collaborated with relationship managers to design tailored financial solutions for prospects.',
        'Monitored financial indicators and market trends to assess risks and opportunities.',
        'Prepared credit proposals and internal documentation in line with risk and compliance policies.',
      ],
    },
  ]

  return (
    <div>
      {timeline.map((item) => (
        <div
          className="flex md:flex-row flex-col md:items-start space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${item.company}`}
        >
          <Paragraph className="md:w-35 w-full md:text-sm lg:text-sm ">{item.date}</Paragraph>
          <div className="flex-1">
            <Heading as="h5" className="text-lg md:text-lg lg:text-lg text-sky-500">
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">{item.title}</Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">{item.description}</Paragraph>
            {item.responsibilities.map((responsibility) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-sky-500" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">{children}</Paragraph>
    </div>
  )
}
