import { Icon } from "@/components"

export function Logo() {
    return (
        <a href="/">
            <div className="flex items-center space-x-2 text-foreground">
                <div className="flex aspect-square size-8 shrink-0 items-center justify-center">
                    <Icon variant="egg" />
                </div>

                <div className="flex flex-1 text-left text-sm">
                    <span className="truncate font-bold leading-tight">
                        Edvin Högman
                    </span>
                </div>
            </div>
        </a>
    )
}
