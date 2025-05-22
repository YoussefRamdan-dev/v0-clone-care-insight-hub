"use client"

import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LaboratoriesPage from "./pages/LaboratoriesPage"
import SpecialtiesPage from "./pages/SpecialtiesPage"
import SpecialtyDetailPage from "./pages/SpecialtyDetailPage"
import DoctorsPage from "./pages/DoctorsPage"
import DoctorProfilePage from "./pages/DoctorProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import RegisterPatientPage from "./pages/RegisterPatientPage"
import RegisterDoctorPage from "./pages/RegisterDoctorPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import DashboardDoctorPage from "./pages/DashboardDoctorPage"
import DashboardPatientPage from "./pages/DashboardPatientPage"
import AppointmentsPage from "./pages/AppointmentsPage"
import MessagesPage from "./pages/MessagesPage"
import HealthyTalkPage from "./pages/HealthyTalkPage"
import ProfilePage from "./pages/ProfilePage"
import EditProfilePage from "./pages/EditProfilePage"
import SettingsPage from "./pages/SettingsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState(null) // 'doctor' or 'patient'

  // Check if user is authenticated (in a real app, this would check for tokens in localStorage)
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token")
      if (token) {
        setIsAuthenticated(true)
        // For demo purposes, we'll set userType based on localStorage
        setUserType(localStorage.getItem("userType") || "doctor")
      }
    }

    checkAuth()
  }, [])

  // Mock login function for demo purposes
  const login = (email, password, type = "doctor") => {
    // In a real app, this would make an API call
    console.log("Login attempt with:", { email, password })

    // For demo, we'll simulate successful login
    localStorage.setItem("token", "demo-token")
    localStorage.setItem("userType", type)
    setIsAuthenticated(true)
    setUserType(type)

    return true
  }

  // Mock logout function
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    setIsAuthenticated(false)
    setUserType(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Navbar isAuthenticated={isAuthenticated} userType={userType} onLogout={logout} />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/laboratories" element={<LaboratoriesPage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/specialties/:specialty" element={<SpecialtyDetailPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          <Route path="/login" element={<LoginPage onLogin={login} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/patient" element={<RegisterPatientPage />} />
          <Route path="/register/doctor" element={<RegisterDoctorPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/doctor"
            element={isAuthenticated && userType === "doctor" ? <DashboardDoctorPage /> : <LoginPage onLogin={login} />}
          />
          <Route
            path="/dashboard/patient"
            element={
              isAuthenticated && userType === "patient" ? <DashboardPatientPage /> : <LoginPage onLogin={login} />
            }
          />
          <Route
            path="/appointments"
            element={isAuthenticated ? <AppointmentsPage /> : <LoginPage onLogin={login} />}
          />
          <Route path="/messages" element={isAuthenticated ? <MessagesPage /> : <LoginPage onLogin={login} />} />
          <Route path="/healthy-talk" element={<HealthyTalkPage isAuthenticated={isAuthenticated} />} />
          <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <LoginPage onLogin={login} />} />
          <Route path="/profile/edit" element={isAuthenticated ? <EditProfilePage /> : <LoginPage onLogin={login} />} />
          <Route path="/settings" element={isAuthenticated ? <SettingsPage /> : <LoginPage onLogin={login} />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
