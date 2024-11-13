/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack: (config) => {
      config.externals.push({
        'react-three-fiber': 'react-three-fiber',
        'three': 'three',
      })
      return config
    },
    transpilePackages: ['mermaid'],
  }
  
  export default nextConfig