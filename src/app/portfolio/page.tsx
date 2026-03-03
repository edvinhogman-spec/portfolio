import { PortfolioCard } from "@/features/portfolio/components"
import { getPortfolioManyItems } from "@/features/portfolio/utils"

export default async function Page() {
    const portfolio = getPortfolioManyItems()

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-3 p-3 pt-0">
            {portfolio.map((card, i) => (
                <div key={`${card.title} ${i}`} className="h-110">
                    <PortfolioCard
                        title={card.title}
                        description={card.description}
                        thumbnailURL={card.thumbnailURL}
                        tags={card.tags}
                    />
                </div>
            ))}
        </div>
    )
}
