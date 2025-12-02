import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface NavbarLinkProps {
    label: string
    path: string
    selected: boolean
}

export function NavbarLink({ label, path, selected }: NavbarLinkProps) {
    return (
        <div>
            <Link
                className={twMerge(selected && "text-yellow-500")}
                href={path}
            >
                {label}
            </Link>
        </div>
    )
}
