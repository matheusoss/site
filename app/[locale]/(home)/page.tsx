import { allPages } from 'content-collections';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Mdx } from '@/components/mdx';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import matheusImg from './matheus.jpeg';

type Params = {
  params: { locale: string };
};

export function generateMetadata({ params }: Params): Metadata {
  const { locale } = params;
  const homePage = allPages.find((page) => page._meta.fileName === 'home.mdx');

  if (!homePage) {
    throw new Error('Home page not found');
  }

  // Handle both string and localized object types for title and description
  const title =
    typeof homePage.title === 'string'
      ? homePage.title
      : homePage.title[locale as keyof typeof homePage.title] ||
        homePage.title.en;

  const description =
    typeof homePage.description === 'string'
      ? homePage.description
      : homePage.description[locale as keyof typeof homePage.description] ||
        homePage.description.en;

  return createMetadata({
    title,
    description,
    image: `/og?title=${title}&description=${description}`,
  });
}

export default function HomePage() {
  const homePage = allPages.find((page) => page._meta.fileName === 'home.mdx');

  if (!homePage) {
    throw new Error('Home page not found');
  }

  return (
    <>
      <Section className="flex items-center gap-4">
        <Image
          alt=""
          className="size-10 rounded-full"
          height={40}
          placeholder="blur"
          priority
          src={matheusImg}
          width={40}
        />
        <div>
          <p className="font-medium text-foreground leading-normal">
            Matheus Oliveira
          </p>
          <p className="text-foreground-lighter text-sm leading-normal">
            Software and Data Engineer, currently at{' '}
            <a href="https://brokerpe.com">Brokerpe</a>.
          </p>
        </div>
      </Section>
      <article>
        <Section delay={0.2}>
          <Mdx code={homePage.body} />
        </Section>
      </article>
    </>
  );
}
