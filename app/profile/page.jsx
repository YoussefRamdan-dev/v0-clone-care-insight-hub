"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MessageSquare, User, Settings, Layout, BookOpen, Edit } from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const [doctor, setDoctor] = useState({
    name: "Dr. Sarah Johnson",
    specialty: "Oncology",
    email: "dr.sarah@careinsight.com",
    phone: "+1 (555) 123-4567",
    workPlace: "City Hospital",
    clinicLocation: "123 Medical St, City",
    bio: "Board-certified oncologist with over 10 years of experience specializing in cancer treatment and research. Dedicated to providing compassionate care and innovative treatment options for patients.",
    education: "MD from Harvard Medical School, Oncology Fellowship at Mayo Clinic",
    certifications: "American Board of Internal Medicine, Subspecialty in Medical Oncology",
    avatar: "/placeholder.svg?height=150&width=150",
  })

  const handleEditProfile = () => {
    router.push("/profile/edit")
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-medium text-purple-500">
                CareInsight
              </Link>
            </div>

            <nav className="hidden md:flex space-x-1">
              <Link
                href="/dashboard/doctor"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <Layout className="mr-1.5 h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/appointments"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <Calendar className="mr-1.5 h-4 w-4" />
                Appointments
              </Link>
              <Link
                href="/healthy-talk"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <BookOpen className="mr-1.5 h-4 w-4" />
                Healthy Talk
              </Link>
              <Link
                href="/messages"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <MessageSquare className="mr-1.5 h-4 w-4" />
                Messages
              </Link>
              <Link
                href="/profile"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-500"
              >
                <User className="mr-1.5 h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/settings"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <Button className="bg-purple-500 hover:bg-purple-600" onClick={handleEditProfile}>
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (1/3 width) */}
          <div>
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-center">
                <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={doctor.avatar || "/placeholder.svg"}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                <p className="text-purple-600 mb-4">{doctor.specialty}</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 w-24">Email:</span>
                    <span className="text-sm text-gray-900">{doctor.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 w-24">Phone:</span>
                    <span className="text-sm text-gray-900">{doctor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 w-24">Work Place:</span>
                    <span className="text-sm text-gray-900">{doctor.workPlace}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 w-24">Location:</span>
                    <span className="text-sm text-gray-900">{doctor.clinicLocation}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column (2/3 width) */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="bg-white border border-gray-200 p-1 rounded-md">
                <TabsTrigger value="about" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  Education & Certifications
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  Schedule
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">About Me</h3>
                    <p className="text-gray-700 mb-6">{doctor.bio}</p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                    <p className="text-gray-700 mb-6">{doctor.education}</p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                    <p className="text-gray-700">{doctor.certifications}</p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Working Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Monday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Tuesday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Wednesday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Thursday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Saturday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Sunday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
