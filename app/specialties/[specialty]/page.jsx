"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getDoctorsBySpecialty } from "@/lib/doctors-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, MapPin, Search, ArrowLeft } from "lucide-react"

export default function SpecialtyDoctorsPage({ params }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  const specialtyMap = {
    "brain-cancer": "Brain Cancer",
    "skin-cancer": "Skin Cancer",
    "chest-cancer": "Chest Cancer",
    "blood-cancer": "Blood Cancer",
    "digestive-cancer": "Digestive System Cancer",
    "reproductive-cancer": "Reproductive System Cancer",
  }

  const specialtyName = specialtyMap[params.specialty] || params.specialty

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll use our mock data
    const doctorsData = getDoctorsBySpecialty(params.specialty)
    setDoctors(doctorsData)
    setLoading(false)
  }, [params.specialty])

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      searchQuery === "" ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.workplace.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctors...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/specialties" className="inline-flex items-center text-gray-600 hover:text-purple-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Specialties
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{specialtyName} Specialists</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with top specialists in {specialtyName.toLowerCase()} diagnosis and treatment
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Link key={doctor.id} href={`/doctor/${doctor.id}`}>
                <Card className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start">
                    <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <img
                        src={doctor.avatar || "/placeholder.svg"}
                        alt={doctor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900">{doctor.name}</h2>
                      <p className="text-purple-600 text-sm">{doctor.specialtyDisplay}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm text-gray-700">
                          {doctor.rating} ({doctor.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center mt-1 text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {doctor.workplace}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {doctor.availability.slice(0, 2).map((slot, index) => (
                        <div key={index} className="text-xs text-gray-500">
                          <span className="font-medium">{slot.day}:</span> {slot.slots[0]}
                        </div>
                      ))}
                      {doctor.availability.length > 2 && (
                        <div className="text-xs text-gray-500">+{doctor.availability.length - 2} more days</div>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No doctors found matching your criteria.</p>
              <Button className="mt-4 bg-purple-500 hover:bg-purple-600" onClick={() => setSearchQuery("")}>
                Reset Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
