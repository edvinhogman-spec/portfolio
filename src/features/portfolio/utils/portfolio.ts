import { portfolio } from "../data"

export function getPortfolioItem(slug: string) {
    return portfolio.find((v) => v.slug === slug)
}

export function getPortfolioManyItems({ page = 0, limit = 9 } = {}) {
    const start = page * limit
    const items = portfolio.slice(start, start + limit)
    return items
}
