"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Button, Icon, Logo } from "@/components"

import { NAV_LINKS } from "../constants"
import { NavbarLink } from "./navbar-link"

export function NavbarMenuMobile() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const menuState = isOpen ? "open" : "closed"

    return (
        <div className="group -mr-1 lg:hidden" data-state={menuState}>
            <Button variant="tertiary" onClick={toggleMenu}>
                <Icon variant="apps" className="size-6" />
            </Button>

            {/* Backdrop */}
            <div
                className={twMerge(
                    "pointer-events-none fixed inset-0 z-30 bg-overlay backdrop-blur-md",
                    "opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100",
                )}
            />

            {/* Sidebar */}
            <div
                className={twMerge(
                    "fixed top-0 left-0 z-40 h-screen w-70 border-border border-r bg-background p-6",
                    "-translate-x-full transition-transform duration-300 group-data-[state=open]:translate-x-0",
                )}
            >
                <div className="mb-6 flex items-center justify-between">
                    <Logo />
                    <Button variant="tertiary" onClick={toggleMenu}>
                        X
                    </Button>
                </div>

                {/* Navigation */}
                <div className="flex flex-col space-y-2">
                    {NAV_LINKS.map((props) => (
                        <NavbarLink
                            variant="mobile"
                            key={props.path}
                            {...props}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
