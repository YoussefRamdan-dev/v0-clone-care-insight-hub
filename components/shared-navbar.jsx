"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Calendar, MessageSquare, User, Settings, Layout, BookOpen } from "lucide-react"

export default function SharedNavbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [doctor, setDoctor] = useState({
    name: "Dr. Sarah Johnson",
    specialty: "Oncology",
    avatar: "/placeholder.svg?height=40&width=40",
  })
  const pathname = usePathname()

  // Check if user is authenticated based on the current path
  useEffect(() => {
    // This is a simple check - in a real app, you'd check for an auth token or session
    const authenticatedPaths = ["/dashboard", "/appointments", "/messages", "/healthy-talk", "/profile", "/settings"]

    const isAuthPath = authenticatedPaths.some((path) => pathname.startsWith(path))
    setIsAuthenticated(isAuthPath)
  }, [pathname])

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === "/dashboard/doctor" && pathname === "/dashboard/doctor") {
      return true
    }
    if (path !== "/dashboard/doctor" && pathname.startsWith(path)) {
      return true
    }
    return false
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-medium text-purple-500">
              CareInsight
            </Link>
          </div>

          {isAuthenticated ? (
            <>
              {/* Dashboard Navigation */}
              <nav className="hidden md:flex space-x-1">
                <Link
                  href="/dashboard/doctor"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/dashboard/doctor")
                      ? "text-white bg-purple-500"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Layout className="mr-1.5 h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/appointments"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/appointments")
                      ? "text-white bg-purple-500"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Calendar className="mr-1.5 h-4 w-4" />
                  Appointments
                </Link>
                <Link
                  href="/healthy-talk"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/healthy-talk")
                      ? "text-white bg-purple-500"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <BookOpen className="mr-1.5 h-4 w-4" />
                  Healthy Talk
                </Link>
                <Link
                  href="/messages"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/messages")
                      ? "text-white bg-purple-500"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <MessageSquare className="mr-1.5 h-4 w-4" />
                  Messages
                </Link>
                <Link
                  href="/profile"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/profile")
                      ? "text-white bg-purple-500"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <User className="mr-1.5 h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/settings")
                      ? "text-white bg-purple-500"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Settings className="mr-1.5 h-4 w-4" />
                  Settings
                </Link>
              </nav>

              <div className="flex items-center">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 rounded-full bg-gray-200">
                    <img src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} className="h-8 w-8 rounded-full" />
                  </Avatar>
                  <span className="ml-2 text-sm font-medium text-gray-700">{doctor.name}</span>
                  <svg
                    className="ml-1 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Public Navigation */}
              <nav className="hidden md:flex space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
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
            </>
          )}
        </div>
      </div>
    </header>
  )
}
