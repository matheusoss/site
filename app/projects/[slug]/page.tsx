import { Container } from '@/components/container'
import { SingleProduct } from '@/components/single-product'
import type { Product } from '@/types/products'
import { listProducts } from '@/types/products'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const product = listProducts.find((p) => p.slug === slug) as Product | undefined
  if (product) {
    return {
      title: product.title,
      description: product.description,
    }
  } else {
    return {
      title: 'Projects | Matheus Oliveira',
      description: 'Projects that are active',
    }
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
