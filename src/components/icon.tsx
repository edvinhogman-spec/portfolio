import type { SVGProps } from "react"

const iconLookup = {
    defaultColor: "#e3e3e3",
    dict: {
        menu: {
            src: "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",
            viewBox: "0 -960 960 960",
        },
        menu_open: {
            src: "M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z",
            viewBox: "0 -960 960 960",
        },
    } as const,
}

interface IconProps
    extends Omit<SVGProps<SVGSVGElement>, "children" | "viewBox"> {
    variant: keyof (typeof iconLookup)["dict"]
}

export function Icon({ variant, ...props }: IconProps) {
    const info = iconLookup.dict[variant]
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={iconLookup.defaultColor}
            viewBox={info.viewBox}
            {...props}
        >
            <path d={info.src} />
            <title>{`icon-${variant}`}</title>
        </svg>
    )
}
