import { Logo } from "@/components"
import { NavbarMenuDesktop } from "./navbar-menu-desktop"
import { NavbarMenuMobile } from "./navbar-menu-mobile"

export function Navbar() {
    return (
        <nav className="relative z-20 border-border border-b bg-background">
            <div className="mx-auto flex h-16 w-full items-center justify-center px-4 md:max-w-7xl">
                <NavbarMenuMobile />
                <Logo />
                <NavbarMenuDesktop />
            </div>
        </nav>
    )
}
