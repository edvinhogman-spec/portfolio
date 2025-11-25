import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface NavbarLink {
    label: string
    path: string
    currentPathname: string
}

const navbarLinkStyles = {
    default: {
        className: "",
    },
    selected: {
        className: "font-medium",
    },
}

export function NavbarLink({ label, path, currentPathname }: NavbarLink) {
    const isSelectedPage = path === currentPathname

    return (
        <div>
            <Link
                className={twMerge(
                    navbarLinkStyles.default.className,
                    isSelectedPage
                        ? navbarLinkStyles.selected.className
                        : undefined,
                )}
                href={path}
            >
                {label}
            </Link>

            {isSelectedPage && (
                <div className="h-0.5 w-1/2 justify-self-center bg-yellow-500" />
            )}
        </div>
    )
}
