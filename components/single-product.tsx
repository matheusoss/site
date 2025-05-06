'use client'

import type { Product } from '@/types/products'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState } from 'react'
import { Paragraph } from './paragraph'
import { Badge } from './ui/badge'

export const SingleProduct = ({ product }: { product: Product }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const allImages = [product.thumbnail, ...product.images]
  const getImageUrl = (imgObj: { light: string; dark: string }) => (isDark ? imgObj.dark : imgObj.light)

  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative"
      >
        {/* Blur de fundo */}
        <div
          className={`
            absolute inset-0 z-0
            rounded-3xl
            ${
              isDark
                ? 'bg-gradient-to-b from-[#5f5fff]/40 to-transparent'
                : 'bg-gradient-to-b from-[#5f5fff]/20 to-transparent'
            }
            blur-2xl
            pointer-events-none
            w-full h-full
            transition-all
          `}
          aria-hidden="true"
        />
        <Image
          src={getImageUrl(allImages[activeIdx])}
          alt={`${product.title}`}
          className="rounded-md object-contain relative z-10"
          width={1000}
          height={1000}
        />
        <div className="absolute bottom-0 bg-white dark:bg-neutral-900 h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)] z-20" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {allImages.map((imgObj, idx) => (
          <button
            onClick={() => setActiveIdx(idx)}
            key={`image-thumbnail-${product.slug || ''}-${idx}`}
            className={`hover:scale-105 transition-all duration-300 items-center justify-center ${activeIdx === idx ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg' : ''}`}
            type="button"
          >
            <Image
              src={getImageUrl(imgObj)}
              alt={`Thumbnail do produto ${product.title} ${idx === 0 ? '(principal)' : ''}`}
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-2 border rounded-lg border-neutral-100"
              width={200}
              height={200}
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <div className="font-black mb-2 pb-1 text-4xl"> {product.title}</div>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span key={stack}>
              <Badge variant="outline">{stack}</Badge>
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">{product?.content}</div>

      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-5 origin-left"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <title>Ícone de link externo</title>
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </a>
    </div>
  )
}
