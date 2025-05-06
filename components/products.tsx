'use client'

import { listProducts } from '@/types/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from './heading'
import { Paragraph } from './paragraph'
import { Badge } from './ui/badge'
export const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  hover:bg-neutral-100  dark:hover:bg-neutral-800 rounded-2xl">
      {listProducts.map((product, idx: number) => (
        <motion.div
          key={product.href}
          className="h-full"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: idx * 0.1 }}
        >
          <Link
            href={product.slug ? `/projects/${product.slug}` : product.href}
            key={product.href}
            className="h-full flex flex-row space-x-4 transition duration-200 p-5"
          >
            <div className="flex flex-row space-x-4">
              <Image
                src={product.thumbnail.light}
                alt={product.title}
                width={200}
                height={200}
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading as="h4" className="font-black text-lg md:text-lg lg:text-lg ">
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">{product.description}</Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0 ">
                  {product.stack?.map((stack: string) => (
                    <span key={stack}>
                      <Badge variant="outline">{stack}</Badge>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
