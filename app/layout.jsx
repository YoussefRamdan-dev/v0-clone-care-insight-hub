import { Inter } from "next/font/google"
import "./globals.css"
import SharedNavbar from "@/components/shared-navbar"
import Footer from "@/components/footer"
import { ToastProvider } from "@/components/ui/toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CareInsight - Healthcare Platform",
  description: "Connect with healthcare professionals and manage your medical information",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8f9fa]`}>
        <ToastProvider>
          <SharedNavbar />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
