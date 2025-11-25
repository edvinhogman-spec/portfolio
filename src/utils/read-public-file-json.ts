import fs from "node:fs"
import path from "node:path"

export function readPublicFileJSON<T>(relativePath: string): T | null {
    try {
        const root = process.cwd()
        const filePath = path.join(root, "public", relativePath)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const data = JSON.parse(fileContent) as T
        return data
    } catch (error) {
        console.error(`JSON read failed at public/${relativePath}:`, error)
        return null
    }
}
