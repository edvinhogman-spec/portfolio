import { PortfolioCard } from "@/features/portfolio/components"

export default function Page() {
    const entries = ["hej", "Hejsan!", "heeej??", "hej!"]

    return (
        <div className="grid w-full grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((value) => (
                <div key={value} className="h-110 w-full">
                    <PortfolioCard
                        name="Lorem ipsum dolor sit atem"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                        thumbnailURL="https://i.imgur.com/3tac4zL.jpeg"
                        tags={[
                            "TypeScript",
                            "React",
                            "Hejsan",
                            "Väldigt Lång Text",
                            "Detta Är Ett Test",
                            "Hej Hej Hej",
                        ]}
                    />
                </div>
            ))}
        </div>
    )
}
