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
        <div
            className={twCn(
                "relative",
                "flex size-full flex-col space-y-3 rounded-xl p-6",
                "border-2 border-card bg-card text-card-foreground",
                "transition-all duration-400 hover:border-border",
            )}
        >
            <div className="relative shrink-0 overflow-hidden">
                <div className="flex gap-1.5">
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            className="whitespace-nowrap rounded-md bg-muted px-2 py-1 text-muted-foreground text-xs"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-r from-transparent to-card"></div>
            </div>

            <div className="flex shrink-0 flex-col space-y-1.5">
                <div className="truncate font-semibold text-lg leading-none">
                    {name}
                </div>
                <div className="line-clamp-3 h-[3lh] text-muted-foreground text-sm">
                    {description}
                </div>
            </div>

            <div className="relative size-full flex-1 overflow-hidden rounded-xl">
                <Image
                    className="bg-background object-cover"
                    alt="Thumbnail"
                    src={thumbnailURL}
                    fill
                />
            </div>
        </div>
    )
}
