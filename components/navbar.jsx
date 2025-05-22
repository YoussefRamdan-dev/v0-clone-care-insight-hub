import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-medium text-purple-500">
              CareInsight
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:text-purple-500 hover:border-purple-500"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
