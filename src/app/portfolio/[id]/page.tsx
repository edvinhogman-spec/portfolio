import { notFound } from "next/navigation"
import { PortfolioItem } from "@/features/portfolio/components"
import { getPortfolioItem } from "@/features/portfolio/utils"
import { decodeB64 } from "@/utils/web"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id: encodedId } = await params

    const item = getPortfolioItem(decodeB64(encodedId))
    if (!item) {
        notFound()
    }

    return <PortfolioItem item={item} />
}
