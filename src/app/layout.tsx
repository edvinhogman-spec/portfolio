import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/features/navbar/components"

const sans = DM_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Edvin Högman",
    description: "Portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} antialiased`}>
                <Navbar />

                <div className="flex min-h-screen w-full flex-col">
                    <main className="relative">{children}</main>
                </div>
            </body>
        </html>
    )
}
