import type React from "react"
import { twMerge } from "tailwind-merge"
import { iconSvgs } from "./icon-svgs"

type SVGRComponent = React.FC<React.SVGProps<SVGSVGElement>>

export type IconVariant = keyof typeof iconSvgs

interface IconProps {
    className?: string
    variant: IconVariant
    alt?: string
}

export function Icon({ className, variant, alt }: IconProps) {
    const IconComponent = iconSvgs[variant] as SVGRComponent

    if (!IconComponent) {
        // biome-ignore lint: "Don't crash."
        return <></>
    }

    return (
        <IconComponent
            className={twMerge("fill-current stroke-current", className)}
            aria-label={alt ?? variant}
            fill="#ffffff"
        />
    )
}
