import { usePathname } from "next/navigation"
import { useState } from "react"
import { Icon } from "@/components/icon"
import { formatPathnameToTitle } from "@/utils/functions/format-pathname-to-title"
import { NavbarLink } from "./navbar-link"

const NAV_LINKS = [
    {
        path: "/",
        icon: "portfolio",
    },
    {
        path: "/about",
        icon: "info",
    },
]

export function Navbar() {
    const [active, setActive] = useState(false)
    const currpath = usePathname()

    const createNavLinks = () => {
        return Object.values(NAV_LINKS).map((link) => (
            <NavbarLink
                key={`nav-${link.path}`}
                selected={currpath === link.path}
                label={formatPathnameToTitle(link.path)}
                path={link.path}
                icon={link.icon}
            />
        ))
    }

    return (
        <div className="mb-12 grid grid-cols-[1fr_auto]">
            <p className="font-semibold">EDVIN HÖGMAN</p>

            {/* (desktop) navbar links */}
            <div className="hidden sm:block">
                <div className="flex gap-8">{createNavLinks()}</div>
            </div>

            {/* (mobile) expandable menu */}
            <div className="block sm:hidden">
                <div className="relative">
                    <Icon
                        className="w-6"
                        variant={active ? "menu_open" : "menu"}
                        onClick={() => setActive(!active)}
                    />
                    {active && (
                        <div className="absolute right-0 z-10 mt-1 bg-zinc-900 p-2.5">
                            {createNavLinks()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
