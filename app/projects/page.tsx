import { allPages } from 'content-collections';
import type { Metadata } from 'next';
import { Mdx } from '@/components/mdx';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = (() => {
  const projectPage = allPages.find(
    (page) => page._meta.fileName === 'projects.mdx'
  );

  if (!projectPage) {
    throw new Error('Projects page not found');
  }

  return createMetadata({
    title: projectPage.title,
    description: projectPage.description,
    image: `/og?title=${projectPage.title}&description=${projectPage.description}`,
  });
})();

export default function ProjectsPage() {
  const projectPage = allPages.find(
    (page) => page._meta.fileName === 'projects.mdx'
  );

  if (!projectPage) {
    throw new Error('Projects page not found');
  }

  return (
    <>
      <Section className="gap-0">
        <h1>{projectPage.title}</h1>
        <p className="text-foreground-lighter">{projectPage.description}</p>
      </Section>
      <article>
        <Section>
          <Mdx code={projectPage.body} />
        </Section>
      </article>
    </>
  );
}
