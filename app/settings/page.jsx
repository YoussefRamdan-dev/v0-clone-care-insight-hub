"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Calendar, MessageSquare, User, SettingsIcon, Layout, BookOpen } from "lucide-react"

export default function SettingsPage() {
  const [doctor, setDoctor] = useState({
    name: "Dr. Sarah Johnson",
    specialty: "Oncology",
    avatar: "/placeholder.svg?height=40&width=40",
  })

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
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <User className="mr-1.5 h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/settings"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-500"
              >
                <SettingsIcon className="mr-1.5 h-4 w-4" />
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
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="bg-white border border-gray-200 p-1 rounded-md">
            <TabsTrigger value="account" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Account
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={doctor.name} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="dr.sarah@careinsight.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="specialty">Specialty</Label>
                      <Input id="specialty" defaultValue={doctor.specialty} className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Board-certified oncologist with over 10 years of experience specializing in cancer treatment and research. Dedicated to providing compassionate care and innovative treatment options for patients."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-purple-500 hover:bg-purple-600">Save Changes</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Appointment Reminders</h4>
                        <p className="text-sm text-gray-500">Receive notifications about upcoming appointments</p>
                      </div>
                      <Switch defaultChecked id="appointment-notifications" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">New Messages</h4>
                        <p className="text-sm text-gray-500">Get notified when you receive new messages</p>
                      </div>
                      <Switch defaultChecked id="message-notifications" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Patient Updates</h4>
                        <p className="text-sm text-gray-500">Receive updates when patients modify their information</p>
                      </div>
                      <Switch defaultChecked id="patient-notifications" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-500">
                          Receive email notifications in addition to in-app alerts
                        </p>
                      </div>
                      <Switch defaultChecked id="email-notifications" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-purple-500 hover:bg-purple-600">Save Preferences</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-4">Change Password</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" className="mt-1" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="bg-purple-500 hover:bg-purple-600">Update Password</Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">Session Management</h4>
                    <p className="text-sm text-gray-500 mb-4">You're currently signed in on this device.</p>
                    <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                      Sign Out of All Devices
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
