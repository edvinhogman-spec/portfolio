import { notFound } from "next/navigation"
import { PortfolioItemView } from "@/features/portfolio/components"
import { getPortfolioItem } from "@/features/portfolio/utils"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const item = getPortfolioItem(slug)
    if (!item) {
        notFound()
    }

    return <PortfolioItemView item={item} />
}
