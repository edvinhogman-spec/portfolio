import Image from "next/image"
import { twCn } from "@/utils/styles"

interface PortfolioCardProps {
    name: string
    description: string
    thumbnailURL: string
    tags: string[]
}

export function PortfolioCard({
    name,
    description,
    thumbnailURL,
    tags,
}: PortfolioCardProps) {
    return (
        <div className="group relative h-100 w-120">
            <div
                className={twCn(
                    "flex size-full flex-col space-y-3 rounded-xl p-6",
                    "border-2 border-card bg-card text-card-foreground",
                    "transition-all duration-400 group-hover:border-border",
                )}
            >
                <div className="flex gap-1.5">
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            className="shrink-0 rounded-md bg-muted px-2 py-1 text-muted-foreground text-xs"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col space-y-1.5">
                    <div className="shrink-0 font-semibold text-lg leading-none">
                        {name}
                    </div>
                    <div className="shrink-0 text-muted-foreground text-sm leading-snug">
                        {description}
                    </div>
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                        className="object-cover"
                        alt="Thumbnail"
                        src={thumbnailURL}
                        fill
                    />
                </div>
            </div>
        </div>
    )
}
