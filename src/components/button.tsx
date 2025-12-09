import type React from "react"
import { twMerge } from "tailwind-merge"
import { tailwindUtils } from "@/utils/collections/tailwind-utils"

const butonStyles = {
    default: tailwindUtils.className(
        "transform ring-offset-background duration-300 transition-all rounded-md px-6 py-3 font-semibold text-sm text-white",
    ),
    primary: tailwindUtils.className(
        "shadow-indigo-500/20 shadow-lg hover:scale-105 hover:bg-indigo-500/90 bg-linear-to-r from-indigo-500 to-indigo-600",
    ),
    disabled: tailwindUtils.className("pointer-events-none opacity-50"),
}

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
    variant?: "primary"
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
                butonStyles.default,
                butonStyles[variant],
                props.disabled && butonStyles.disabled,
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}
