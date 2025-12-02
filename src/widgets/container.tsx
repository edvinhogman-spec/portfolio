"use client"

import { usePathname } from "next/navigation"
import type React from "react"
import { formatPathnameToTitle } from "@/utils/format-pathname-to-title"
import { Navbar } from "./navbar"

interface ContainerProps {
    children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
    const pathname = usePathname()
    const title = formatPathnameToTitle(pathname)

    return (
        <>
            <div className="-z-10 absolute h-screen w-screen bg-zinc-950" />
            <div className="px-6 py-4">
                <Navbar />
                <div className="justify-items-center">
                    <p className="mb-8 font-medium text-xl">{title}</p>
                    {children}
                </div>
            </div>
        </>
    )
}
