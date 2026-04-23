import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import type { PortfolioItem } from "../types"
import { PortfolioTag } from "./portfolio-tag"

interface PortfolioCardProps {
    item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
    return (
        <Link href={`/portfolio/${item.slug}`}>
            <div
                className={twMerge(
                    "group relative",
                    "flex size-full flex-col space-y-3 rounded-xl p-6",
                    "border border-card bg-card text-card-foreground",
                    "transition-all duration-400 hover:border-border",
                )}
            >
                <div className="relative shrink-0 overflow-hidden">
                    <div className="flex gap-1.5">
                        {item.tags.map((tag) => (
                            <PortfolioTag key={tag} tag={tag} />
                        ))}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-r from-transparent to-card"></div>
                </div>

                <div className="mb-4 flex shrink-0 flex-col space-y-1.5">
                    <div className="truncate font-semibold text-lg leading-none">
                        {item.name}
                    </div>
                    <div className="line-clamp-3 h-[3lh] text-muted-foreground text-sm">
                        {item.description}
                    </div>
                </div>

                <div className="relative size-full flex-1 overflow-hidden rounded-xl">
                    <Image
                        className={twMerge(
                            "bg-background object-cover will-change-transform",
                            "transition-all duration-400 group-hover:scale-105",
                        )}
                        alt="Thumbnail"
                        src={item.thumbnailPath}
                        fill
                    />
                </div>
            </div>
        </Link>
    )
}
