import "server-only"

import portfolio from "@/../public/portfolio.json"

export function getPortfolioItem(name: string) {
    return portfolio.find((v) => v.title === name)
}

export function getPortfolioManyItems({ page = 0, limit = 9 } = {}) {
    const start = page * limit
    const items = portfolio.slice(start, start + limit)
    return items
}
