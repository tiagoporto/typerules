import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  images: {
    remotePatterns: [new URL('https://picsum.photos/**')],
  },
}

export default nextConfig
