import { portfolio } from "../data"

interface PortfolioQuery {
    page?: number
    limit?: number
    filter?: { tags?: string[] }
}

export function getPortfolioManyItems({
    page = 0,
    limit = 8,
    filter,
}: PortfolioQuery = {}) {
    const filtered = []

    for (const item of portfolio.items) {
        const included =
            filter?.tags?.every((t) => item.tags.includes(t)) ?? true

        if (!included) continue

        filtered.push(item)
    }

    const start = page * limit
    const items = filtered.slice(start, start + limit)
    return items
}

export function getPortfolioItem(slug: string) {
    return portfolio.items.find((v) => v.slug === slug)
}
