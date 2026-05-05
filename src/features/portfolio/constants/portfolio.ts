import { join } from "node:path"

export const PORTFOLIO_ROOT_PATH = join(process.cwd(), "public/portfolio")
export const PORTFOLIO_KNOWN_LANGS = ["typescript", "luau", "python"] as const
