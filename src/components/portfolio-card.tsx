import Image from "next/image"

interface PortfolioCardProps {
    title: string
    thumbnailURL: string
    tags: string[]
}

// TODO:
// lägg till ett sätt att ange en färg för olika tags, kanske jag har en lookup map
// med typ:
//      - typescript: blå
//      - spel: grön
//      - övrigt: grå

export function PortfolioCard({
    title,
    thumbnailURL,
    tags,
}: PortfolioCardProps) {
    return (
        <div className="group">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-zinc-800/20 shadow-lg transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        alt="Thumbnail"
                        src={thumbnailURL}
                        fill
                    />

                    <div className="absolute inset-0 flex items-center justify-center border-6 border-white/10 opacity-80 transition-opacity group-hover:opacity-100"></div>

                    {/* tag area */}
                    <div className="absolute top-4 right-4 left-4 flex select-none flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className="rounded-2xl border border-white/5 bg-yellow-800/90 p-2 px-3 text-white text-xs capitalize backdrop-blur-sm"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* text area */}
                <div className="flex grow flex-col p-4">
                    <p className="text-wrap text-center text-gray-400 text-xs">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}
