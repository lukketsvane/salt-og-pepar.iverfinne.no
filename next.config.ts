import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-reconciler': 'react-reconciler/cjs/react-reconciler.production.min.js',
      };
    }
    
    return config;
  },
};

export default nextConfig;