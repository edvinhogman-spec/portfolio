import { twMerge } from "tailwind-merge"
import { Button } from "@/components"
import { InspectableImage } from "@/components/inspectable-image"

import type { PortfolioItemStruct } from "../types"

export function PortfolioItemView({ item }: { item: PortfolioItemStruct }) {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 pb-10">
            <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="font-bold text-4xl tracking-tight sm:text-5xl">
                    {item.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {item.tags.map((tag) => (
                        <Button
                            key={tag}
                            variant="muted"
                            className="whitespace-nowrap px-2 py-1 text-xs"
                        >
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>

            <hr className="border-border" />

            <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                </p>
            </div>

            <hr className="border-border" />

            <div className="relative aspect-square max-h-90 overflow-hidden rounded-xl">
                <InspectableImage
                    alt={item.title}
                    src={item.thumbnailURL}
                    fill
                />
            </div>

            <hr className="border-border" />

            <div
                className={twMerge(
                    "grid gap-x-3 gap-y-12",
                    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                )}
            >
                {item.media.map(({ src, label }) => (
                    <div key={src} className="flex flex-col gap-3">
                        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                            <InspectableImage alt={label} src={src} fill />
                        </div>

                        <div className="text-center text-muted-foreground">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
