import { Container } from '@/components/container'
import { SingleProduct } from '@/components/single-product'
import { listProducts } from '@/types/products'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getProducts } from '@/lib/products'

export async function generateStaticParams() {
  const products = getProducts()

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata(props): Promise<Metadata | undefined> {
  const params = await props.params
  const product = listProducts.find((p) => p.slug === params.slug)

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

export default async function SingleProjectPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const { slug } = params
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
