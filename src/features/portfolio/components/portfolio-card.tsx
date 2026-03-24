import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Button } from "@/components"

import { encodeB64 } from "@/utils/web/base64"

interface PortfolioCardProps {
    title: string
    description: string
    thumbnailURL: string
    tags: string[]
}

export function PortfolioCard({
    title,
    description,
    thumbnailURL,
    tags,
}: PortfolioCardProps) {
    return (
        <Link href={`/portfolio/${encodeB64(title)}`}>
            <div
                className={twMerge(
                    "group relative",
                    "flex size-full flex-col space-y-3 rounded-xl p-6",
                    "border-2 border-card bg-card text-card-foreground",
                    "transition-all duration-400 hover:border-border",
                )}
            >
                <div className="relative shrink-0 overflow-hidden">
                    <div className="flex gap-1.5">
                        {tags.map((tag) => (
                            <Button
                                key={tag}
                                variant="muted"
                                className="whitespace-nowrap px-2 py-1 text-xs"
                            >
                                {tag}
                            </Button>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-r from-transparent to-card"></div>
                </div>

                <div className="mb-4 flex shrink-0 flex-col space-y-1.5">
                    <div className="truncate font-semibold text-lg leading-none">
                        {title}
                    </div>
                    <div className="line-clamp-3 h-[3lh] text-muted-foreground text-sm">
                        {description}
                    </div>
                </div>

                <div className="relative size-full flex-1 overflow-hidden rounded-xl">
                    <Image
                        className={twMerge(
                            "bg-background object-cover will-change-transform",
                            "transition-all duration-400 group-hover:scale-105",
                        )}
                        alt="Thumbnail"
                        src={thumbnailURL}
                        fill
                    />
                </div>
            </div>
        </Link>
    )
}
