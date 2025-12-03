/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimizations
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        domains: ['images.unsplash.com'], // Placeholder for external images
    }
}
module.exports = nextConfig
