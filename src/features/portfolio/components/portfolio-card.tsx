import Image from "next/image"
import Link from "next/link"

interface PortfolioCardProps {
    thumbnailURL: string
    linkURL: string
    title: string
}

export function PortfolioCard({
    thumbnailURL,
    linkURL,
    title,
}: PortfolioCardProps) {
    return (
        <Link href={linkURL}>
            <div className="group">
                <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-zinc-900">
                    <div className="relative aspect-square overflow-hidden">
                        <Image
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Thumbnail"
                            src={thumbnailURL}
                            fill
                        />
                        <div className="absolute inset-0 flex items-center justify-center border-6 border-white/20 opacity-80 transition-opacity group-hover:opacity-100"></div>
                    </div>

                    <div className="flex grow flex-col items-center rounded-b-2xl border-2 border-white/5 p-4">
                        <p className="text-wrap text-center text-gray-300 text-sm">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
