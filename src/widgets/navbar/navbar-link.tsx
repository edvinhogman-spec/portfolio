import Link from "next/link"
import { Icon } from "@/components/icon"

interface NavbarLinkProps {
    label: string
    icon: string
    path: string
    selected: boolean
}

// att göra:
// undvik att gap skapar mellanrum
// animera

export function NavbarLink({ label, icon, path, selected }: NavbarLinkProps) {
    return (
        <Link href={path}>
            <div className="flex">
                <div className="flex items-center rounded-xl px-5 py-3 hover:bg-indigo-600/20">
                    <Icon
                        className="mr-2 aspect-square w-6.5"
                        fill={"var(--color-gray-300"}
                        variant={icon as never}
                    />
                    <p className="font-medium text-gray-300 text-sm">{label}</p>
                </div>
            </div>
        </Link>
    )
}
