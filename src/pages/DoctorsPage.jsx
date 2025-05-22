"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { doctors } from "../data/doctors"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Input from "../components/ui/Input"
import { Star, MapPin, Search } from "lucide-react"

function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSpecialty, setActiveSpecialty] = useState("all")

  // Filter doctors based on search query and active specialty
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      searchQuery === "" ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialtyDisplay.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.workplace.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSpecialty = activeSpecialty === "all" || doctor.specialty === activeSpecialty

    return matchesSearch && matchesSpecialty
  })

  const specialties = [
    { id: "all", name: "All Specialties" },
    { id: "brain-cancer", name: "Brain Cancer" },
    { id: "skin-cancer", name: "Skin Cancer" },
    { id: "chest-cancer", name: "Chest Cancer" },
    { id: "blood-cancer", name: "Blood Cancer" },
    { id: "digestive-cancer", name: "Digestive Cancer" },
    { id: "reproductive-cancer", name: "Reproductive Cancer" },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Cancer Specialist</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with top oncologists and cancer specialists across various specialties
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search by name, specialty, or location..."
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

          {/* Specialty Tabs */}
          <div className="mt-6">
            <div className="w-full flex overflow-x-auto pb-2 space-x-2 bg-transparent">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => setActiveSpecialty(specialty.id)}
                  className={`px-4 py-2 rounded-full ${
                    activeSpecialty === specialty.id
                      ? "bg-purple-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Link key={doctor.id} to={`/doctor/${doctor.id}`}>
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
                        <Star className="h-4 w-4 text-yellow-400" />
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
              <Button
                className="mt-4 bg-purple-500 hover:bg-purple-600"
                onClick={() => {
                  setSearchQuery("")
                  setActiveSpecialty("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorsPage
