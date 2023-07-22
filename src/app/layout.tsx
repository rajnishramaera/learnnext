import "./globals.css"
import type { Metadata } from "next"
import { Inter, Roboto_Mono, JetBrains_Mono } from "next/font/google"
async function getData() {
  const res = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Learn Next ",
  description: "Bhagwan bharose",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(getData())

  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${jetbrains_mono.variable}`}
    >
      <body className=" font-title">
        <h2 className=" font-primary">layout header Title</h2>
        {children}
        <h2 className=" font-sub">layout footer</h2>
      </body>
    </html>
  )
}
