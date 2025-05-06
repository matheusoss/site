type ProductImage = {
  light: string
  dark: string
}

export type Product = {
  title: string
  description: string
  thumbnail: ProductImage
  images: ProductImage[]
  href: string
  slug?: string
  stack?: string[]
  content?: React.ReactNode | string
}

export const listProducts: Product[] = [
  {
    href: 'https://brokerpe.com',
    title: 'Brokerpe',
    description:
      'Brokerpe is a platform that aims to facilitate the Brazilian capital market through technology.',
    thumbnail: {
      light: '/images/thumbnail-light-brokerpe.png',
      dark: '/images/thumbnail-dark-brokerpe.png',
    },
    images: [
      {
        light: '/images/brokerpe-site-light.png',
        dark: '/images/brokerpe-site-dark.png',
      },
    ],
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'Supabase', 'Stripe'],
    slug: 'brokerpe',
    content: (
      <div>
        <p>
          Brokerpe is a platform that aims to facilitar o mercado de capitais brasileiro através da tecnologia.
        </p>{' '}
      </div>
    ),
  },
]
