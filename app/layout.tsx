import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LeftNav } from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WAIFace",
  description:
    "This is an WAIFace dashboard",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="dark h-full bg-gray-50">
      <body className={inter.className}>
        <div className="flex w-full">
          <Header />
        </div>
        <div className="flex w-full">
          <div className="flex w-40 gap-2">
            <LeftNav />
          </div>
          <div className="flex w-full gap-6 justify-end">
              <div className="flex w-full max-h-screen flex-col gap-2">
                <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
                  {children}
                </main>
                <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
