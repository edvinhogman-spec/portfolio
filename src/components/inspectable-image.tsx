"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"
import { twMerge } from "tailwind-merge"
import { Button } from "./button"

type InspectableImageProps = Omit<ImageProps, "children">

// TODO:
// Om jag känner för det:
// Fixa att den skalar om rätt när fönsterstorleken är väldigt liten på höjden
// Denna bug finns även i mobilnavbar:en

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

                        <div className="relative flex aspect-square w-full max-w-lg flex-col space-y-1 lg:aspect-video lg:max-w-4xl">
                            <div className="relative flex-1 overflow-hidden rounded-md border border-border bg-card p-6">
                                <div className="relative size-full overflow-hidden rounded-md bg-background">
                                    <Image
                                        fill
                                        alt={props.alt}
                                        src={props.src}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex shrink-0 space-x-1">
                                <Button
                                    variant="card"
                                    className="w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {props.alt}
                                </Button>

                                <Button
                                    variant="card"
                                    className="flex-1 px-6"
                                    onClick={() => setIsOpen(false)}
                                >
                                    X
                                </Button>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    )
}
