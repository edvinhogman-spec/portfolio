"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"
import { twMerge } from "tailwind-merge"
import { Button } from "./button"

type InspectableImageProps = Omit<ImageProps, "children">

export function InspectableImage({
    className,
    ...props
}: InspectableImageProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button
            className="group absolute inset-0 size-full cursor-pointer"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
        >
            <Image
                className={twMerge(
                    "object-cover transition-all duration-400 group-hover:scale-105",
                    className,
                )}
                {...props}
            />

            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay backdrop-blur-md">
                        <div className="relative aspect-square w-lg rounded-2xl border border-border bg-card p-6">
                            <Button
                                variant="secondary"
                                className={twMerge(
                                    "absolute top-0 -right-12 z-10",
                                    "border border-border bg-card font-bold",
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                X
                            </Button>

                            <div className="relative size-full overflow-hidden rounded-2xl bg-background">
                                <Image
                                    className={twMerge(
                                        "object-contain",
                                        className,
                                    )}
                                    {...props}
                                />
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </button>
    )
}
