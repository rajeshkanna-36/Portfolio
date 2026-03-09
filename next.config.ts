import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Optionally prefix router base path if deployed to a subdirectory on gh-pages without a custom domain.
    // The current package.json homepage is "https://rajeshkanna-36.github.io/Portfolio"
    // so we need basePath and assetPrefix for GitHub Pages during production.
    basePath: isProd ? '/Portfolio' : '',
    assetPrefix: isProd ? '/Portfolio/' : '',
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
