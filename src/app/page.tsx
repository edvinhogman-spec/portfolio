import { PortfolioCard } from "@/components/portfolio-card"
import type { PortfolioCardStruct } from "@/types/structs"
import { readPublicFileJSON } from "@/utils/read-public-file-json"

export default function Home() {
    const cards = readPublicFileJSON<PortfolioCardStruct[]>("portfolio.json")

    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {cards?.map((card, i) => (
                <PortfolioCard
                    key={`card-${i}`}
                    title={card.title}
                    description={card.description}
                    thumbnailURL={card.thumbnailURL}
                />
            ))}
        </div>
    )
}
