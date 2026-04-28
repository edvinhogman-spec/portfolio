import {
    PortfolioCard,
    PortfolioFilterBar,
} from "@/features/portfolio/components"
import { portfolio } from "@/features/portfolio/data"
import { getPortfolioManyItems } from "@/features/portfolio/utils"

interface PageProps {
    searchParams?: Promise<{ filter?: string }>
}

export default async function Page(props: PageProps) {
    const searchParams = await props.searchParams
    const tags = searchParams?.filter?.split(",")

    const items = getPortfolioManyItems({
        filter: { tags },
    })

    return (
        <div className="space-y-3">
            <PortfolioFilterBar tags={portfolio.tags} />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {items.map((item) => (
                    <div key={item.slug} className="h-110">
                        <PortfolioCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
