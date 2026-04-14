import { readdirSync, readFileSync } from "node:fs"
import { basename, extname, join } from "node:path"
import { PORTFOLIO_ROOT_PATH } from "../constants/portfolio"
import type { PortfolioItemDefinition, PortfolioItemMetadata } from "../types"

function parsePortfolioEntry(dirpath: string) {
    const metaPath = join(dirpath, "meta.json")
    const assetsDir = join(dirpath, "assets")
    const slug = basename(dirpath)
    const publicURL = `/static/portfolio/${slug}`

    const definition = JSON.parse(
        readFileSync(metaPath, "utf-8"),
    ) as PortfolioItemDefinition

    const assets = readdirSync(assetsDir)
        .map((f) => ({
            path: `${publicURL}/assets/${f}`,
            name: basename(f, extname(f)),
        }))
        .filter((a) => !a.path.endsWith(definition.thumbnailPath))

    const metadata: PortfolioItemMetadata = {
        slug: slug,
        name: definition.name,
        description: definition.description,
        tags: definition.tags,
        thumbnailPath: `${publicURL}${definition.thumbnailPath}`,
        assets: assets,
    }

    return metadata
}

export function loadPortfolio() {
    const folders = readdirSync(PORTFOLIO_ROOT_PATH)
    return folders.map((dirname) => {
        const dirpath = join(PORTFOLIO_ROOT_PATH, dirname)
        return parsePortfolioEntry(dirpath)
    })
}
