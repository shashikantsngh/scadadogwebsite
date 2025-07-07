import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ScadaDog - Where IT Meets OT | Industrial Automation Solutions",
  description:
    "ScadaDog bridges the gap between automation, data, and intelligence to empower industries with cutting-edge technology solutions. Expert SCADA integration, IIoT data collection, and industrial software development.",
  keywords: "SCADA, industrial automation, IIoT, data collection, OT, IT integration, industrial software",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sd/scadadog_logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
