import fs from 'node:fs'
import path from 'node:path'

type ProductImage = {
    light: string
    dark: string
}
type Metadata = {
    title: string
    description: string
    thumbnail: ProductImage
    images: ProductImage[]
    href: string
    slug?: string
    stack?: string[]
    content?: React.ReactNode | string
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match?.[1]
    const content = fileContent.replace(frontmatterRegex, '').trim()
    const frontMatterLines = frontMatterBlock?.trim().split('\n') || []
    const metadata: Partial<Metadata> = {}

    for (const line of frontMatterLines) {
        const [key, ...valueArr] = line.split(': ')
        if (key) {
            let value = valueArr.join(': ').trim()
            value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes

            // Verifica o tipo da chave e converte o valor adequadamente
            const trimmedKey = key.trim() as keyof Metadata
            if (trimmedKey === 'thumbnail' || trimmedKey === 'images') {
                try {
                    const parsedValue = JSON.parse(value)
                    metadata[trimmedKey] = parsedValue
                } catch {
                    metadata[trimmedKey] = value
                }
            } else if (trimmedKey === 'stack') {
                metadata[trimmedKey] = value.split(',').map(item => item.trim())
            } else {
                metadata[trimmedKey] = value
            }
        }
    }

    return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file))
        const slug = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            content,
        }
    })
}

export function getProducts() {
    return getMDXData(path.join(process.cwd(), 'app', 'projects'))
}
