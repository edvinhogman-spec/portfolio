import Link from "next/link"
import { Carousel, Icon } from "@/components"
import { PORTFOLIO_KNOWN_LANGS } from "@/features/portfolio/constants"

export default function Page() {
    return (
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-12 self-center lg:flex-row lg:justify-between">
            <div className="space-y-4 text-center lg:text-left">
                <div className="font-bold text-7xl">
                    Edvin
                    <br />
                    Högman,
                </div>

                <div className="text-muted-foreground text-xl">
                    I am a tech student at LBS Kreativa Gymnasium in Örebro.
                </div>

                <div className="flex justify-center gap-1 lg:justify-start">
                    <Link href={"https://github.com/edvinhogman-spec/"}>
                        <Icon
                            className="text-muted-foreground"
                            variant="github"
                        />
                    </Link>
                </div>
            </div>

            <div className="flex-[0.5]">
                <Carousel
                    items={PORTFOLIO_KNOWN_LANGS.map((lang) => (
                        <Icon
                            variant={lang}
                            key={lang}
                            className="stroke-none"
                        />
                    ))}
                />
            </div>
        </div>
    )
}
