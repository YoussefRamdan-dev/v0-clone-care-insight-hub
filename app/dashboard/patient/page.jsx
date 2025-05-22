import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, FileText, Clock, AlertCircle } from "lucide-react"

export default function PatientDashboardPage() {
  // Mock data for patient dashboard
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Smith",
      specialty: "Brain Cancer",
      date: "June 15, 2025",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Johnson",
      specialty: "Skin Cancer",
      date: "June 28, 2025",
      time: "2:30 PM",
      status: "Pending",
    },
  ]

  const recentDiagnoses = [
    {
      id: 1,
      date: "May 10, 2025",
      type: "MRI Analysis",
      result: "No abnormal growth detected",
      doctor: "Dr. Smith",
    },
    {
      id: 2,
      date: "April 25, 2025",
      type: "Skin Biopsy",
      result: "Benign lesion",
      doctor: "Dr. Johnson",
    },
  ]

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="container-custom">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Patient Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Upcoming Appointments</CardTitle>
              <CalendarDays className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{upcomingAppointments.length}</div>
              <p className="text-xs text-gray-500">Next: June 15, 2025</p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Recent Diagnoses</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{recentDiagnoses.length}</div>
              <p className="text-xs text-gray-500">Last updated: May 10, 2025</p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Treatment Plans</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1</div>
              <p className="text-xs text-gray-500">Active plan: Monitoring</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="space-y-4">
          <TabsList className="bg-white border border-gray-100 p-1">
            <TabsTrigger value="appointments" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Appointments
            </TabsTrigger>
            <TabsTrigger value="diagnoses" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Diagnoses
            </TabsTrigger>
            <TabsTrigger value="treatments" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Treatment Plans
            </TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
                <Button className="bg-primary hover:bg-primary/90 shadow-sm">Book New Appointment</Button>
              </div>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                          <p className="text-sm text-gray-500">{appointment.specialty}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{appointment.date}</p>
                          <p className="text-sm text-gray-500">{appointment.time}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            appointment.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments</h3>
                  <p className="mt-1 text-sm text-gray-500">You don't have any upcoming appointments.</p>
                  <div className="mt-6">
                    <Button className="bg-primary hover:bg-primary/90 shadow-sm">Book New Appointment</Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="diagnoses" className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Diagnoses</h2>
              {recentDiagnoses.length > 0 ? (
                <div className="space-y-4">
                  {recentDiagnoses.map((diagnosis) => (
                    <div key={diagnosis.id} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{diagnosis.type}</h3>
                          <p className="text-sm text-gray-500">By {diagnosis.doctor}</p>
                        </div>
                        <p className="text-sm text-gray-500">{diagnosis.date}</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Result:</span> {diagnosis.result}
                        </p>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
                          View Full Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No diagnoses</h3>
                  <p className="mt-1 text-sm text-gray-500">You don't have any recent diagnoses.</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="treatments" className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Treatment Plans</h2>
              <div className="border border-gray-100 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Monitoring Plan</h3>
                    <p className="text-sm text-gray-500">Recommended by Dr. Smith</p>
                  </div>
                  <div className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Start Date:</span> May 15, 2025
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Duration:</span> 6 months
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Description:</span> Regular monitoring with quarterly MRI scans to
                    ensure no abnormal growth.
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
