import { allPosts } from 'content-collections';
import { ArrowLeftToLineIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/components/link';
import { Mdx } from '@/components/mdx';
import { PostCopyURL } from '@/components/post-copy-url';
import { PostStatus } from '@/components/post-status';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';

type PageProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const runtime = 'nodejs';

export const generateMetadata = async ({
  params,
}: PageProperties): Promise<Metadata> => {
  const { slug } = await params;
  const page = allPosts.find((page) => page._meta.path === `blog/${slug}`);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    image: `/og?title=${page.title}&description=${page.description}`,
  });
};

export const generateStaticParams = (): { slug: string }[] =>
  allPosts.map((page) => ({
    slug: page._meta.path,
  }));

export default async function Page({ params }: PageProperties) {
  const { slug } = await params;
  const page = allPosts.find((page) => page._meta.path === `blog/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Section
        className="-ml-28 absolute mt-1 hidden select-none lg:block"
        delay={0.6}
      >
        <Link
          className={cn(
            'flex items-center gap-2 text-nowrap text-foreground-lighter text-xs transition-colors',
            'hover:text-foreground'
          )}
          href="/blog"
        >
          <ArrowLeftToLineIcon size={12} />
          Blog
        </Link>
      </Section>

      <Section className="gap-0">
        <div className="flex items-center gap-0">
          <PostStatus status={page.tags ?? ''} />
        </div>
        <h1>{page.title}</h1>

        <p className="text-foreground-lighter">{page.description}</p>
      </Section>
      {page.image ? (
        <Section>
          <Image
            alt={page.title}
            className="overflow-hidden rounded-lg border border-border/50"
            height={630}
            priority
            quality={100}
            src={page.image}
            width={1200}
          />
        </Section>
      ) : null}
      <article className="grid gap-3">
        <Section delay={0.2}>
          <Mdx code={page.body} />
        </Section>
      </article>
      <Section delay={0.4}>
        <div className="flex w-full items-center justify-between border-border border-t py-3 text-foreground-lighter text-sm">
          <div className="flex flex-col">
            <span>
              Publicado em{' '}
              {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
                page.date
              )}
            </span>
            <span>{page.readingTime}</span>
          </div>

          <PostCopyURL />
        </div>
      </Section>
    </>
  );
}
