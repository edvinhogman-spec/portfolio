export type PortfolioItemDefinition = {
    name: string
    description: string
    thumbnailPath: string
    tags: string[]
}

export type PortfolioItem = {
    slug: string
    name: string
    description: string
    thumbnailPath: string
    tags: string[]
    assets: { path: string; name: string }[]
}
