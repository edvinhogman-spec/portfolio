import type React from "react"
import { twCn } from "@/utils/styles"

const butonStyles = {
    default: twCn(
        "transform ring-offset-background duration-300 transition-all rounded-md px-6 py-3 font-semibold text-sm text-white",
    ),
    primary: twCn(
        "shadow-indigo-500/20 shadow-lg hover:scale-105 hover:bg-indigo-500/90 bg-linear-to-r from-indigo-500 to-indigo-600",
    ),
    disabled: twCn("pointer-events-none opacity-50"),
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
            className={twCn(
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
