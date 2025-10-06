import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

const nextConfig = {
  pageExtensions: ['js','jsx','ts','tsx','mdx'],
  experimental: {
    outputFileTracingIncludes: { '/projects/*': ['./src/app/projects/**/*.mdx'] },
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] },
})

export default withMDX(nextConfig)
