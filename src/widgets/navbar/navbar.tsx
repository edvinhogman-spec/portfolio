import { usePathname } from "next/navigation"
import { useState } from "react"
import { Icon } from "@/components/icon"
import { formatPathnameToTitle } from "@/utils/format-pathname-to-title"
import { NavbarLink } from "./navbar-link"

const NAV_LINKS = ["/", "/about"]

export function Navbar() {
    const [active, setActive] = useState(false)
    const currpath = usePathname()

    const createNavLinks = () => {
        return Object.values(NAV_LINKS).map((path) => (
            <NavbarLink
                key={`nav-${path}`}
                selected={currpath === path}
                label={formatPathnameToTitle(path)}
                path={path}
            />
        ))
    }

    return (
        <div className="mb-12 grid grid-cols-[1fr_auto]">
            <p className="font-medium">EDVIN HÖGMAN</p>

            {/* (desktop) navbar links */}
            <div className="hidden sm:block">
                <div className="flex gap-8">{createNavLinks()}</div>
            </div>

            {/* (mobile) collapsed menu */}
            <div className="block sm:hidden">
                <div className="relative">
                    <Icon
                        className="w-6"
                        variant={active ? "menu_open" : "menu"}
                        onClick={() => setActive(!active)}
                    />
                    {active && (
                        <div className="absolute right-0 z-10 mt-1 rounded bg-zinc-900 p-2">
                            {createNavLinks()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
