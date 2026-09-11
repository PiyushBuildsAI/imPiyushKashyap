// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone is for Docker only. Vercel expects the default output layout.
  ...(process.env.DOCKER_BUILD === "true" ? { output: "standalone" as const } : {}),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig