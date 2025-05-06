'use client'

import {
  BiLogoAws,
  BiLogoDocker,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { RiNextjsFill } from 'react-icons/ri'
import { SiApacheairflow } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { Heading } from './heading'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
export const TechStack = () => {
  const techStack = [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: (
        <BiLogoPython className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: (
        <BiLogoTypescript className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: (
        <RiNextjsFill className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Airflow',
      href: 'https://airflow.apache.org/',
      component: (
        <SiApacheairflow className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Docker',
      href: 'https://www.docker.com/',
      component: (
        <BiLogoDocker className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Postgres',
      href: 'https://www.postgresql.org/',
      component: (
        <BiLogoPostgresql className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: (
        <BiLogoTailwindCss className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },

    {
      name: 'React JS',
      href: 'https://reactjs.org/',
      component: (
        <BiLogoReact className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />
      ),
    },
    {
      name: 'Azure',
      href: 'https://azure.microsoft.com/',
      component: <VscAzure className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />,
    },
    {
      name: 'AWS',
      href: 'https://aws.amazon.com/',
      component: <BiLogoAws className="size-9 hover:text-sky-500 transition-all text-muted-foreground duration-300" />,
    },
  ]
  return (
    <>
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        <TooltipProvider>
          {techStack.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild onClick={() => window.open(tech.href, '_blank')}>
                {tech.component}
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>{tech.name}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </>
  )
}
