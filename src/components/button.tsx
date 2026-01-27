import type React from "react"
import { twCn } from "@/utils/styles"

export type ButtonVariant = keyof typeof styles.variants

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

// biome-ignore format: dont want it spanning multiple lines
const styles = {
    core: {
        base: twCn("cursor-pointer rounded-md px-3 py-2 transition-all duration-200"),
    },
    variants: {
        primary: twCn(),
        tertiary: twCn("hover:bg-zinc-800"),
    },
}

export function Button({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type="button"
            className={twCn(
                styles.core.base,
                styles.variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}
