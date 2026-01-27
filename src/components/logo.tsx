import { Icon } from "@/components"

export function Logo() {
    return (
        <a href="/">
            <div className="flex items-center space-x-2 text-foreground">
                <div className="flex aspect-square size-8 items-center justify-center">
                    <Icon variant="egg" className="fill-foreground" />
                </div>

                <div className="flex flex-1 flex-col text-left text-sm">
                    <span className="truncate font-semibold leading-tight">
                        Edvin Högman
                    </span>
                </div>
            </div>
        </a>
    )
}
