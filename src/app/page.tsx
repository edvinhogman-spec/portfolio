import { PortfolioCard } from "@/features/portfolio/components/portfolio-card"
import type { PortfolioCardStruct } from "@/features/portfolio/types"
import { readPublicFileJSON } from "@/utils/web"

export default function Home() {
    const cards = readPublicFileJSON<PortfolioCardStruct[]>("portfolio.json")

    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {cards?.map((card, i) => (
                <PortfolioCard
                    key={`card-${card.title}-${i}`}
                    thumbnailURL={card.thumbnailURL}
                    linkURL={card.linkURL}
                    title={card.title}
                />
            ))}
        </div>
    )
}
