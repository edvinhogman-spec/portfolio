import Image, { type ImageProps } from "next/image"
import { useState } from "react"

type InspectableImageProps = Omit<ImageProps, "children">

export function InspectableImage(props: InspectableImageProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button
            className="group relative"
            type="button"
            onClick={() => setIsOpen(true)}
        >
            <Image {...props} />
        </button>
    )
}
