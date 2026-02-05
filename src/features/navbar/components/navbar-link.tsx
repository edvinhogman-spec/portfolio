"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button, Icon, type IconVariant } from "@/components"
import { twCn } from "@/utils/styles"

type NavbarLinkVariant = "mobile" | "desktop"

interface NavbarLinkProps {
    variant: NavbarLinkVariant
    label: string
    icon: IconVariant
    path: string
}

export function NavbarLink({ variant, label, icon, path }: NavbarLinkProps) {
    const pathname = usePathname()

    const selected = pathname === path
    const highlighted = selected && variant === "desktop"

    return (
        <div className="relative flex h-full items-center">
            <Link href={path}>
                <Button
                    variant="tertiary"
                    className={twCn(selected && "bg-secondary")}
                >
                    <div className="flex w-full items-center space-x-2">
                        <Icon variant={icon} className="size-5 shrink-0" />
                        <span className="font-medium text-sm leading-tight">
                            {label}
                        </span>
                    </div>
                </Button>

                {highlighted && (
                    <div className="absolute bottom-0 h-0.5 w-full translate-y-px bg-foreground" />
                )}
            </Link>
        </div>
    )
}
