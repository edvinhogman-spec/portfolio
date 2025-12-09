import { readFileSync } from "node:fs"
import { join } from "node:path"

export function readPublicFileJSON<T>(relativePath: string): T | null {
    try {
        const root = process.cwd()
        const filePath = join(root, "public", relativePath)
        const fileContent = readFileSync(filePath, "utf-8")
        const data = JSON.parse(fileContent) as T
        return data
    } catch (error) {
        console.error(`JSON read failed at public/${relativePath}:`, error)
        return null
    }
}
