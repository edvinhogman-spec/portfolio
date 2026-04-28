import { portfolio } from "../data"

interface PortfolioQuery {
    filter?: { tags?: string[] }
}

export function getPortfolioManyItems({ filter }: PortfolioQuery = {}) {
    const filtered = []

    for (const item of portfolio.items) {
        const included =
            filter?.tags?.every((t) => item.tags.includes(t)) ?? true

        if (!included) continue

        filtered.push(item)
    }

    return filtered
}

export function getPortfolioItem(slug: string) {
    return portfolio.items.find((v) => v.slug === slug)
}
