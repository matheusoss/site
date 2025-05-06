import { Container } from '@/components/container'
import { SingleProduct } from '@/components/single-product'
import { listProducts } from '@/types/products'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await params.slug
  const product = listProducts.find((p) => p.slug === slug)

  if (product) {
    return {
      title: product.title,
      description: product.description,
    }
  }

  return {
    title: 'Projects | Matheus Oliveira',
    description: 'Projects that are active',
  }
}

export default function SingleProjectPage({ params }: Props) {
  const slug = params.slug
  const product = listProducts.find((p) => p.slug === slug)

  if (!product) {
    redirect('/projects')
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  )
}
