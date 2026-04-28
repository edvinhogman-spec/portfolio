import { notFound } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { InspectableImage } from "@/components"
import { PortfolioTag } from "@/features/portfolio/components"
import { getPortfolioItem } from "@/features/portfolio/utils"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const item = getPortfolioItem(slug)
    if (!item) {
        notFound()
    }

    return (
        <div className="mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="font-bold text-4xl tracking-tight sm:text-5xl">
                    {item.name}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {item.tags.map((tag) => (
                        <PortfolioTag key={tag} tag={tag} />
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
                    alt={item.name}
                    src={item.thumbnailPath}
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
                {item.assets.map((asset) => (
                    <div key={asset.path} className="flex flex-col gap-3">
                        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                            <InspectableImage
                                alt={asset.name}
                                src={asset.path}
                                fill
                            />
                        </div>

                        <div className="text-center text-muted-foreground">
                            {asset.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
