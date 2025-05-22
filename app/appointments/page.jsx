"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Clock, CheckCircle } from "lucide-react"

export default function AppointmentsPage() {
  // Mock data
  const upcomingAppointments = []
  const pastAppointments = [
    {
      id: 1,
      patient: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "May 15, 2025",
      time: "10:00 AM",
      type: "Follow-up",
      status: "Completed",
    },
    {
      id: 2,
      patient: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "May 10, 2025",
      time: "2:30 PM",
      type: "Initial Consultation",
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <Button className="bg-purple-500 hover:bg-purple-600">
            <Plus className="mr-2 h-4 w-4" /> New Appointment
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="bg-white border border-gray-200 p-1 rounded-md">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Past
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              {upcomingAppointments.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 rounded-full bg-gray-200">
                          <img
                            src={appointment.avatar || "/placeholder.svg"}
                            alt={appointment.patient}
                            className="h-10 w-10 rounded-full"
                          />
                        </Avatar>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-gray-400 mr-1" />
                              <p className="text-xs text-gray-500">
                                {appointment.date} at {appointment.time}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">{appointment.type}</p>
                        </div>
                        <div className="ml-4 flex space-x-2">
                          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
                            Reschedule
                          </Button>
                          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No upcoming appointments</h3>
                  <p className="text-gray-500 mb-4">You don't have any appointments scheduled.</p>
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    <Plus className="mr-2 h-4 w-4" /> New Appointment
                  </Button>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="past">
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              {pastAppointments.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {pastAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 rounded-full bg-gray-200">
                          <img
                            src={appointment.avatar || "/placeholder.svg"}
                            alt={appointment.patient}
                            className="h-10 w-10 rounded-full"
                          />
                        </Avatar>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-gray-400 mr-1" />
                              <p className="text-xs text-gray-500">
                                {appointment.date} at {appointment.time}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm text-gray-500 mr-2">{appointment.type}</p>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No past appointments</h3>
                  <p className="text-gray-500">You don't have any past appointments.</p>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
