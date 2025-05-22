"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Calendar, MessageSquare, User, Settings, Layout, BookOpen } from "lucide-react"

function Navbar({ isAuthenticated, userType, onLogout }) {
  const [doctor, setDoctor] = useState({
    name: "Dr. Sarah Johnson",
    specialty: "Oncology",
    avatar: "/placeholder.svg?height=40&width=40",
  })
  const location = useLocation()

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === "/dashboard/doctor" && location.pathname === "/dashboard/doctor") {
      return true
    }
    if (path !== "/dashboard/doctor" && location.pathname.startsWith(path)) {
      return true
    }
    return false
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-medium text-purple-500">
              CareInsight
            </Link>
          </div>

          {isAuthenticated ? (
            <>
              {/* Dashboard Navigation */}
              <nav className="hidden md:flex space-x-1">
                <Link
                  to="/dashboard/doctor"
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
                  to="/appointments"
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
                  to="/healthy-talk"
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
                  to="/messages"
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
                  to="/profile"
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
                  to="/settings"
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
                  <div className="h-8 w-8 rounded-full bg-gray-200">
                    <img src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} className="h-8 w-8 rounded-full" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">{doctor.name}</span>
                  <button
                    onClick={onLogout}
                    className="ml-4 px-3 py-1 text-sm text-gray-700 hover:text-purple-500 border border-gray-300 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Public Navigation */}
              <nav className="hidden md:flex space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </nav>
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:text-purple-500 hover:border-purple-500">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md">
                    Register
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
