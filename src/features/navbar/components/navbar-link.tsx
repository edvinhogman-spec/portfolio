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
        <Link href={path} className="relative">
            <Button
                variant="tertiary"
                className={twCn(
                    "flex w-full items-center space-x-2",
                    selected && "bg-secondary",
                )}
            >
                <Icon variant={icon} className="size-5 shrink-0" />
                <span className="font-medium text-sm leading-tight">
                    {label}
                </span>
            </Button>

            {highlighted && (
                <div className="absolute -bottom-3.5 h-0.5 w-full" />
            )}
        </Link>
    )
}
