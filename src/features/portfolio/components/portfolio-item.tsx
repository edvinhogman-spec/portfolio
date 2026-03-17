import Image from "next/image"
import { Button } from "@/components"
import { twCn } from "@/utils/styles"
import type { PortfolioItemStruct } from "../types"

export function PortfolioItem({ item }: { item: PortfolioItemStruct }) {
    return (
        <article className="mx-auto flex max-w-4xl flex-col gap-12 px-4 pb-10">
            <header className="flex flex-col items-center gap-6 text-center">
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
            </header>

            <hr className="border-border" />

            <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                </p>
            </section>

            <hr className="border-border" />

            <section className="relative aspect-square max-h-90 overflow-hidden rounded-xl">
                <Image
                    className="object-cover"
                    alt={item.title}
                    src={item.thumbnailURL}
                    fill
                />
            </section>

            <hr className="border-border" />

            <section
                className={twCn(
                    "grid gap-x-3 gap-y-12",
                    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                )}
            >
                {item.media.map(({ src, label }) => (
                    <div key={src} className="flex flex-col gap-3">
                        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                            <Image
                                className="object-cover"
                                alt={label}
                                src={src}
                                fill
                            />
                        </div>

                        <div className="text-center text-muted-foreground">
                            {label}
                        </div>
                    </div>
                ))}
            </section>
        </article>
    )
}
