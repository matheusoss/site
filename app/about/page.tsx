import { allPages } from 'content-collections';
import type { Metadata } from 'next';
import { Mdx } from '@/components/mdx';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';

type Params = {
  params: { locale: string };
};

export function generateMetadata({ params }: Params): Metadata {
  const { locale } = params;
  const aboutPage = allPages.find(
    (page) => page._meta.fileName === 'about.mdx'
  );

  if (!aboutPage) {
    throw new Error('About page not found');
  }

  // Handle both string and localized object types for title and description
  const title =
    typeof aboutPage.title === 'string'
      ? aboutPage.title
      : aboutPage.title[locale as keyof typeof aboutPage.title] ||
        aboutPage.title.en;

  const description =
    typeof aboutPage.description === 'string'
      ? aboutPage.description
      : aboutPage.description[locale as keyof typeof aboutPage.description] ||
        aboutPage.description.en;

  return createMetadata({
    title,
    description,
    image: `/og?title=${title}&description=${description}`,
  });
}

export default function AboutPage({ params }: Params) {
  const { locale } = params;
  const aboutPage = allPages.find(
    (page) => page._meta.fileName === 'about.mdx'
  );

  if (!aboutPage) {
    throw new Error('About page not found');
  }

  // Handle both string and localized object types for title and description
  const title =
    typeof aboutPage.title === 'string'
      ? aboutPage.title
      : aboutPage.title[locale as keyof typeof aboutPage.title] ||
        aboutPage.title.en;

  const description =
    typeof aboutPage.description === 'string'
      ? aboutPage.description
      : aboutPage.description[locale as keyof typeof aboutPage.description] ||
        aboutPage.description.en;

  return (
    <>
      <Section className="gap-0">
        <h1>{title}</h1>
        <p className="text-foreground-lighter">{description}</p>
      </Section>
      <article>
        <Section>
          <Mdx code={aboutPage.body} />
        </Section>
      </article>
    </>
  );
}
