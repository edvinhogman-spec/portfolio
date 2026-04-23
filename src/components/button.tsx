import type React from "react"
import { twMerge } from "tailwind-merge"

export type ButtonVariant = keyof typeof styles.variants

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

const styles = {
    core: {
        base: twMerge(
            "cursor-pointer rounded-md px-3 py-2",
            "transition-all duration-200",
        ),
    },
    variants: {
        primary: twMerge(
            "bg-primary hover:bg-secondary hover:text-secondary-foreground text-primary-foreground",
        ),
        secondary: twMerge(
            "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
        ),
        tertiary: twMerge("hover:bg-secondary text-secondary-foreground"),
        muted: twMerge(
            "bg-muted hover:bg-accent hover:text-accent-foreground text-muted-foreground",
        ),
        card: twMerge(
            "border border-border bg-card hover:bg-accent hover:text-accent-foreground text-card-foreground",
        ),
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
            className={twMerge(
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
