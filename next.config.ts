import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
                destination: "/about",
                permanent: false,
            },
        ]
    },
}

export default nextConfig
