import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Icon } from "@/components/icon"

interface NavbarLinkProps {
    label: string
    icon: string
    path: string
    selected: boolean
}

export function NavbarLink({ label, icon, path, selected }: NavbarLinkProps) {
    return (
        <div className="flex">
            <div className="flex items-center gap-2 rounded-xl p-3 hover:bg-indigo-600/20">
                <Icon
                    className="aspect-square w-6.5"
                    fill={"var(--color-gray-300"}
                    variant={icon as never}
                />
                <Link
                    className={twMerge("font-medium text-sm", "text-gray-300")}
                    href={path}
                >
                    {label}
                </Link>
            </div>
        </div>
    )
}
