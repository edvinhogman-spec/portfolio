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
        <>
            <button
                type="button"
                className="group absolute inset-0 size-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    className={twMerge(
                        "object-cover transition-all duration-400 group-hover:scale-105",
                        className,
                    )}
                    {...props}
                />
            </button>

            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <button
                            type="button"
                            className="absolute inset-0 bg-overlay backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        <div className="relative w-full max-w-lg space-y-2">
                            <Button
                                variant="card"
                                className="w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </Button>

                            <div className="relative overflow-hidden rounded-md border border-border bg-card p-6">
                                <div className="relative aspect-square bg-background">
                                    <Image
                                        fill
                                        alt={props.alt}
                                        src={props.src}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    )
}
