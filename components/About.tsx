'use client'
import { Paragraph } from '@/components/paragraph'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function About() {
  const images = ['/matheus.jpeg']
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Matheus Oliveira - a developer with a passion for technology and soccer!
        </Paragraph>
        <Paragraph className=" mt-4">
          I started my journey as an economist, but I've always liked technology so I always studied it on the side,
          until one day a director where I worked said "you're in the wrong place and you don't know it". I doubted him,
          but he was right, I really was in the wrong place.
        </Paragraph>

        <Paragraph className=" mt-4">
          I discovered that by programming I can have the world at my fingertips, that for me is wonderful, being able
          to create anything at any time is priceless.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I intend to share my insights, experiences and creations with you. Whether you're a
          fellow developer looking for solutions, looking for inspiration or simply someone who appreciates other
          aspects of technology itself, there's something here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can
          explore the limitless possibilities of technology and storytelling.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here and I can't wait to embark on this adventure with you.
        </Paragraph>
      </div>
    </div>
  )
}
