import Image from "next/image"

interface PortfolioCardProps {
    title: string
    thumbnailURL: string
    description: string
}

export function PortfolioCard({
    title,
    description,
    thumbnailURL,
}: PortfolioCardProps) {
    return (
        <div className="border-[1.5] border-yellow-700">
            <div className="flex items-start justify-between gap-2 p-4">
                <div>
                    <p className="mb-0.5 font-medium text-lg">{title}</p>
                    <p className="text-sm">{description}</p>
                </div>
                <div className="relative aspect-square h-20">
                    <Image src={thumbnailURL} alt="Thumbnail" fill />
                </div>
            </div>
        </div>
    )
}
