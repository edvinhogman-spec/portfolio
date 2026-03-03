import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.imgur.com",
            },
        ],
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
