import { usePathname } from "next/navigation"
import { formatPathnameToTitle } from "@/utils/format-pathname-to-title"
import { NavbarLink } from "./navbar-link"

const NAV_LINKS = ["/", "/about"]

export function Navbar() {
    const pathname = usePathname()

    return (
        <div className="mb-12 grid grid-cols-[1fr_auto]">
            <div>
                <p className="font-medium">EDVIN HÖGMAN</p>
            </div>
            <div className="flex gap-8">
                {Object.values(NAV_LINKS).map((path) => (
                    <NavbarLink
                        key={`nav-${path}`}
                        label={formatPathnameToTitle(path)}
                        path={path}
                        currentPathname={pathname}
                    />
                ))}
            </div>
        </div>
    )
}
