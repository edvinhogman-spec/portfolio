export type PortfolioItemDefinition = {
    name: string
    description: string
    thumbnailPath: string
    tags: string[]
}

export type PortfolioItemMetadata = {
    slug: string
    name: string
    description: string
    thumbnailPath: string
    tags: string[]
    assets: { path: string; name: string }[]
}
