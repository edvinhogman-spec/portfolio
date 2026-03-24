import { twMerge } from "tailwind-merge"
import { PortfolioCard } from "@/features/portfolio/components"
import { getPortfolioManyItems } from "@/features/portfolio/utils"

export default async function Page() {
    const portfolio = getPortfolioManyItems()

    return (
        <div
            className={twMerge(
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
