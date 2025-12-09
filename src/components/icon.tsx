import type { SVGProps } from "react"

const iconLookup = {
    menu: {
        src: "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",
        viewBox: "0 -960 960 960",
    },
    menu_open: {
        src: "M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z",
        viewBox: "0 -960 960 960",
    },
    portfolio: {
        src: "M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z",
        viewBox: "0 -960 960 960",
    },
    info: {
        src: "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
        viewBox: "0 -960 960 960",
    },
}

interface IconProps
    extends Omit<SVGProps<SVGSVGElement>, "children" | "viewBox"> {
    variant: keyof typeof iconLookup
}

export function Icon({ variant, ...props }: IconProps) {
    const info = iconLookup[variant]
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={info.viewBox}
            fill={props.fill ?? "#e3e3e3"}
            {...props}
        >
            <path d={info.src} />
            <title>{`icon-${variant}`}</title>
        </svg>
    )
}
