import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.imgur.com",
            },
        ],
    },

    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },

    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/portfolio",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
