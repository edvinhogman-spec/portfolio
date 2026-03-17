import { PortfolioCard } from "@/features/portfolio/components"
import { getPortfolioManyItems } from "@/features/portfolio/utils"
import { twCn } from "@/utils/styles"

export default async function Page() {
    const portfolio = getPortfolioManyItems()

    return (
        <div
            className={twCn(
                "gap-3 p-3 pt-0",
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            )}
        >
            {portfolio.map((card) => (
                <div key={card.title} className="h-110">
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
