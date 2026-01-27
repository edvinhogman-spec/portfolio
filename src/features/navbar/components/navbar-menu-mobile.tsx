"use client"

import { useState } from "react"
import { Button, Icon, Logo } from "@/components"
import { twCn } from "@/utils/styles"
import { NAV_LINKS } from "../constants"
import { NavbarLink } from "./navbar-link"

export function NavbarMenuMobile() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const menuState = isOpen ? "open" : "closed"

    return (
        <div className="lg:hidden">
            <div className="group -mr-1" data-state={menuState}>
                <Button variant="tertiary" onClick={toggleMenu}>
                    <Icon variant="apps" className="size-6" />
                </Button>

                {/* Backdrop */}
                <div
                    className={twCn(
                        "pointer-events-none fixed inset-0 z-30 bg-black/60 backdrop-blur-md",
                        "opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100",
                    )}
                />

                {/* Sidebar */}
                <div
                    className={twCn(
                        "fixed top-0 left-0 z-40 h-screen w-70 border-white/5 border-r bg-background p-6",
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
        </div>
    )
}
