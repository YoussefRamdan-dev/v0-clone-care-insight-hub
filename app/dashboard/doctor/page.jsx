"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Calendar, MessageSquare, FileText } from "lucide-react"

export default function DoctorDashboardPage() {
  const [doctor, setDoctor] = useState({
    name: "Dr. Sarah Johnson",
    specialty: "Oncology",
    avatar: "/placeholder.svg?height=40&width=40",
  })

  // Mock data
  const stats = {
    appointments: 0,
    messages: 2,
    patientFiles: 8,
  }

  const recentPatients = [
    {
      id: 1,
      name: "John Doe",
      condition: "Mild hypertension controlled with medication",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const yourPatients = [
    {
      id: 1,
      name: "John Doe",
      email: "patient@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome, {doctor.name}</h1>
          <p className="text-gray-600">Manage your patient appointments and consultations.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Appointments Card */}
          <Card className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Appointments</h2>
                <p className="text-4xl font-bold text-gray-900 mt-2">{stats.appointments}</p>
                <p className="text-sm text-gray-500 mt-1">Upcoming appointments</p>
                <Link href="/appointments" className="text-sm text-purple-500 hover:underline mt-2 inline-block">
                  View all appointments
                </Link>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </Card>

          {/* Messages Card */}
          <Card className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Messages</h2>
                <p className="text-4xl font-bold text-gray-900 mt-2">{stats.messages}</p>
                <p className="text-sm text-gray-500 mt-1">Unread messages</p>
                <Link href="/messages" className="text-sm text-purple-500 hover:underline mt-2 inline-block">
                  Check messages
                </Link>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </Card>

          {/* Patient Files Card */}
          <Card className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Patient Files</h2>
                <p className="text-4xl font-bold text-gray-900 mt-2">{stats.patientFiles}</p>
                <p className="text-sm text-gray-500 mt-1">Patient files</p>
                <Link href="/patient-files" className="text-sm text-purple-500 hover:underline mt-2 inline-block">
                  View all files
                </Link>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <Card className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
              {stats.appointments > 0 ? (
                <div className="space-y-4">
                  {/* Appointment items would go here */}
                  <p>Appointments will be displayed here.</p>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">No upcoming appointments.</div>
              )}
            </Card>

            {/* Your Patients */}
            <Card className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Patients</h2>
              {yourPatients.length > 0 ? (
                <div className="space-y-4">
                  {yourPatients.map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 rounded-full bg-gray-200">
                          <img
                            src={patient.avatar || "/placeholder.svg"}
                            alt={patient.name}
                            className="h-10 w-10 rounded-full"
                          />
                        </Avatar>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
                          <p className="text-sm text-gray-500">{patient.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">No patients yet.</div>
              )}
            </Card>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="space-y-6">
            {/* Recent Patients */}
            <Card className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Patients</h2>
              {recentPatients.length > 0 ? (
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-start space-x-4">
                      <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center text-gray-700 font-medium">
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{patient.name}</h3>
                        <p className="text-sm text-gray-500">{patient.condition}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">No recent patients.</div>
              )}
            </Card>

            {/* AI Assistant */}
            <Card className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Assistant</h2>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Get help with patient summaries, appointment scheduling, and message drafting.
                </p>
                <Button className="bg-purple-500 hover:bg-purple-600">Chat with AI Assistant</Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
