import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Container } from "@/widgets/container"

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
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
            <body className={`${montserrat.variable} antialiased`}>
                <Container>{children}</Container>
            </body>
        </html>
    )
}
