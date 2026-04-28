"use client"

import { type ReactNode, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

interface CarouselProps {
    items: ReactNode[]
    intervalMs?: number
    className?: string
}

export function Carousel({
    items,
    intervalMs = 5000,
    className,
}: CarouselProps) {
    const [itemIndex, setItemIndex] = useState(0)

    useEffect(() => {
        if (items.length <= 1) return

        const timer = setInterval(() => {
            setItemIndex((prev) => (prev + 1) % items.length)
        }, intervalMs)

        return () => clearInterval(timer)
    }, [items.length, intervalMs])

    return (
        <div
            className={twMerge(
                "relative aspect-square overflow-hidden rounded-lg bg-card",
                className,
            )}
        >
            <div
                className="flex size-full transition-transform duration-500"
                style={{ transform: `translateX(-${itemIndex * 100}%)` }}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="size-full min-w-full shrink-0 p-8 *:size-full"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
