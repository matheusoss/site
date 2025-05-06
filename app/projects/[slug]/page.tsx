import { Container } from '@/components/container'
import { SingleProduct } from '@/components/single-product'
import type { Product } from '@/types/products'
import { listProducts } from '@/types/products'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug
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

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string }
}) {
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
