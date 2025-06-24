import { allPages } from 'content-collections';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Mdx } from '@/components/mdx';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import matheusImg from './matheus.jpeg';

const page = allPages.find((page) => page._meta.fileName === 'home.mdx');

if (!page) {
  throw new Error('Home page not found');
}

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  image: `/og?title=${page.title}&description=${page.description}`,
});

export default function HomePage() {
  return (
    <>
      <Section className="flex items-center gap-4">
        <Image
          alt="avatar"
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
            Fundador e CEO da <a href="https://brokerpe.com">Brokerpe</a>.
          </p>
        </div>
      </Section>
      <article>
        <Section delay={0.2}>
          <Mdx code={page.body} />
        </Section>
      </article>
    </>
  );
}
