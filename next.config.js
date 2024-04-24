/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
      },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "betty-theme.myshopify.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.shopify.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**",
            },
        ],
    }
}

module.exports = nextConfig
