import Image from "next/image"

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
            <div className="flex size-full flex-col space-y-3 rounded-xl bg-background-offset p-6">
                <div className="flex gap-1.5">
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            className="rounded-md bg-background-surface px-2 py-1 text-foreground-muted text-xs"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col space-y-1.5">
                    <div className="font-semibold text-foreground-heading text-lg leading-none">
                        {name}
                    </div>
                    <div className="text-foreground-muted text-sm leading-snug">
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
