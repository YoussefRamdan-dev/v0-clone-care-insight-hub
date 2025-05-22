"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getDoctorById } from "../data/doctors"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import { Calendar, MessageSquare, Star, Building, Award, Clock, Mail, Phone, ArrowLeft } from "lucide-react"

function DoctorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll use our mock data
    const doctorData = getDoctorById(id)
    setDoctor(doctorData)
    setLoading(false)
  }, [id])

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctor profile...</p>
        </div>
      </div>
    )
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Doctor Not Found</h1>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist or has been removed.</p>
          <Link to="/doctors">
            <Button className="bg-purple-500 hover:bg-purple-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/doctors" className="inline-flex items-center text-gray-600 hover:text-purple-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Doctors
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Doctor Profile */}
          <div className="md:col-span-1">
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Profile Header with Purple Background */}
              <div className="h-24 bg-purple-200"></div>

              {/* Profile Content */}
              <div className="px-6 pb-6 -mt-12">
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-white p-1 shadow-sm">
                    <img
                      src={doctor.avatar || "/placeholder.svg"}
                      alt={doctor.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Doctor Name and Specialty */}
                <div className="text-center mt-4">
                  <div className="flex justify-center items-center gap-1 mb-1">
                    <span className="text-xl font-bold">👨‍⚕️</span>
                    <h1 className="text-xl font-bold text-gray-900">{doctor.name}</h1>
                  </div>
                  <p className="text-gray-600">{doctor.specialtyDisplay}</p>

                  {/* Rating */}
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-gray-900 font-medium">{doctor.rating}</span>
                    <span className="ml-1 text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-6">
                  <Button
                    variant={isFollowing ? "outline" : "default"}
                    className={`flex-1 ${isFollowing ? "border-gray-300 text-gray-700" : "bg-purple-500 hover:bg-purple-600 text-white"}`}
                    onClick={handleFollowToggle}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button variant="outline" className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-50">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>

                {/* Workplace and Experience */}
                <div className="mt-6">
                  <div className="flex items-center mb-2">
                    <Building className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{doctor.workplace}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{doctor.experience} years of experience</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden mt-6 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-gray-500" />
                Certifications
              </h2>
              <div className="space-y-2">
                {doctor.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </Card>

            {/* Biography */}
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden mt-6 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Biography
              </h2>
              <p className="text-gray-700">{doctor.bio}</p>
            </Card>

            {/* Contact */}
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden mt-6 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{doctor.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{doctor.phone}</span>
                </div>
              </div>

              <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">Book Appointment</Button>
            </Card>
          </div>

          {/* Right Column - Schedule, Reviews, Posts */}
          <div className="md:col-span-2 space-y-6">
            {/* Availability Schedule */}
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                Availability Schedule
              </h2>

              <div className="space-y-4">
                {doctor.availability.map((slot, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-28 font-medium text-gray-900">{slot.day}</div>
                    <div className="flex flex-wrap gap-2">
                      {slot.slots.map((time, timeIndex) => (
                        <div
                          key={timeIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm flex items-center"
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Patient Reviews */}
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Star className="h-5 w-5 mr-2 text-gray-500" />
                Patient Reviews
              </h2>

              {doctor.reviews > 0 ? (
                <div className="space-y-4">
                  {/* This would be populated with actual reviews in a real app */}
                  <div className="p-6 text-center text-gray-500">
                    {doctor.reviews} reviews available. Review display would be implemented here.
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">No reviews yet. Be the first to review this doctor!</div>
              )}
            </Card>

            {/* Latest Health Posts */}
            <Card className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5z"
                    />
                  </svg>
                  Latest Health Posts
                </h2>
                {doctor.posts.length > 0 && (
                  <Link to="#" className="text-purple-500 text-sm hover:underline">
                    View all
                  </Link>
                )}
              </div>

              {doctor.posts.length > 0 ? (
                <div className="space-y-4">
                  {doctor.posts.map((post) => (
                    <div key={post.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-3">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Link to="#" className="text-sm text-purple-500 hover:underline">
                          Read more
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-6">No posts yet from this doctor.</div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfilePage
