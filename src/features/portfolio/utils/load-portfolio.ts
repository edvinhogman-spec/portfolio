import { readdirSync, readFileSync } from "node:fs"
import { basename, extname, join } from "node:path"
import { PORTFOLIO_ROOT_PATH } from "../constants"
import type { PortfolioItem, PortfolioItemDefinition } from "../types"

function parsePortfolioEntry(dirpath: string) {
    const metaPath = join(dirpath, "meta.json")
    const assetsDir = join(dirpath, "assets")
    const slug = basename(dirpath)
    const publicURL = `/portfolio/${slug}`

    const definition = JSON.parse(
        readFileSync(metaPath, "utf-8"),
    ) as PortfolioItemDefinition

    const assets = readdirSync(assetsDir)
        .map((f) => ({
            path: `${publicURL}/assets/${f}`,
            name: basename(f, extname(f)),
        }))
        .filter((a) => !a.path.endsWith(definition.thumbnailPath))

    const item: PortfolioItem = {
        slug: slug,
        name: definition.name,
        description: definition.description,
        tags: definition.tags,
        thumbnailPath: `${publicURL}${definition.thumbnailPath}`,
        assets: assets,
    }

    return item
}

export function loadPortfolio() {
    const folders = readdirSync(PORTFOLIO_ROOT_PATH)

    const items = folders.map((dirname) => {
        const dirpath = join(PORTFOLIO_ROOT_PATH, dirname)
        return parsePortfolioEntry(dirpath)
    })

    const tags = [...new Set(items.flatMap((item) => item.tags))]

    return { items, tags }
}
