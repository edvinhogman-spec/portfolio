import { PortfolioCard } from "@/components/portfolio-card"
import type { PortfolioCardStruct } from "@/types/structs"
import { readPublicFileJSON } from "@/utils/read-public-file-json"

export default function Home() {
    const cards = readPublicFileJSON<PortfolioCardStruct[]>("portfolio.json")

    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {cards?.map((card, i) => (
                <PortfolioCard
                    key={`card-${card.title}-${i}`}
                    title={card.title}
                    thumbnailURL={card.thumbnailURL}
                    tags={card.tags}
                />
            ))}
        </div>
    )
}
