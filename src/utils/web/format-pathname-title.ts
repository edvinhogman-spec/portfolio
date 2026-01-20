// Använde ChatGPT för att formattera om fula strängar till titlar med hjälp av regex
export function formatPathnameTitle(pathname: string): string {
    const cleanPath = pathname.split(/[?#]/)[0].replace(/^\/|\/$/g, "")
    if (cleanPath === "") {
        return "Portfolio"
    }

    const segments = cleanPath.split("/")
    const lastSegment = segments.at(-1)!

    const formatted = lastSegment
        .replace(/-/g, " ")
        .replace(/\[|\]/g, "")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    return formatted
}
