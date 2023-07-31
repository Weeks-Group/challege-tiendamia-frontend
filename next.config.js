/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.s3.amazonaws.com', "v1.tailwindcss.com"]
    },
    experimental: {
        serverActions: true,
    },
    env: {
        API_URL: process.env.API_URL
    },
}

module.exports = nextConfig
