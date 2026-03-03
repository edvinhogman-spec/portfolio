import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components"
import { getPortfolioItem } from "@/features/portfolio/utils"
import { twCn } from "@/utils/styles"
import { decodeB64 } from "@/utils/web"

// TODO:
// gör responsiv
// strukturera koden bättre
// flytta till features/portfolio/components "PortfolioItemView"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const item = getPortfolioItem(decodeB64(id))
    if (!item) {
        notFound()
    }

    return (
        <div
            className={twCn(
                "mx-auto flex flex-col items-center text-center",
                "mt-6 max-w-4xl gap-5",
            )}
        >
            <h2 className="font-semibold text-4xl tracking-tight">
                {item.title}
            </h2>

            <div className="flex gap-1.5">
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

            <div className="h-px w-full bg-border" />

            <div className="flex w-full items-start gap-3 text-left">
                <div className="flex-1">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.description}
                    </p>
                </div>

                <div className="relative h-50 w-full max-w-75 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                        className="object-cover"
                        alt={item.title}
                        src={item.thumbnailURL}
                        fill
                        sizes="400px"
                    />
                </div>
            </div>

            <div className="h-px w-full bg-border" />

            <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-3">
                <div className="flex h-32 rounded-xl bg-card"></div>
                <div className="flex h-32 rounded-xl bg-card"></div>
                <div className="flex h-32 rounded-xl bg-card"></div>
            </div>
        </div>
    )
}
