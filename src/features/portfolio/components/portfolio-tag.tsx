import { Button } from "@/components"

interface PortfolioTagProps {
    tag: string
}

export function PortfolioTag({ tag }: PortfolioTagProps) {
    return (
        <Button
            key={tag}
            variant="muted"
            className="whitespace-nowrap px-2 py-1 text-xs"
        >
            {tag}
        </Button>
    )
}
