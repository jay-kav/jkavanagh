import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow MDX pages alongside JSX
  pageExtensions: ['js', 'jsx', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
