import { PortfolioCard } from "@/features/portfolio/components/portfolio-card"

export default function Page() {
    return (
        <div className="mt-20 flex size-full items-center justify-center">
            <PortfolioCard
                name=" Lorem ipsum dolor sit atem"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
                thumbnailURL="https://i.imgur.com/3tac4zL.jpeg"
                tags={["TypeScript", "SQL"]}
            />
        </div>
    )
}
