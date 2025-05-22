"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PatientRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "male",
    age: "",
    height: "",
    weight: "",
    bloodType: "",
    medicalCondition: "",
    chronicDiseases: "",
    currentMedications: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Patient Registration data:", formData)
    // Here you would typically handle registration
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-medium text-center mb-2">Create Your Account</h1>
          <p className="text-gray-600 text-center mb-6">Join CareInsight as a patient or healthcare provider</p>

          {/* Tab Navigation */}
          <div className="flex mb-8 border rounded-md overflow-hidden">
            <button className="flex-1 py-3 text-center bg-white font-medium text-black">Register as Patient</button>
            <Link href="/register/doctor" className="flex-1">
              <button className="w-full py-3 text-center bg-gray-100 text-gray-600">Register as Doctor</button>
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="123-456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                    <SelectTrigger id="gender" className="mt-1">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Medical Information Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Medical Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    name="height"
                    placeholder="175"
                    value={formData.height}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    placeholder="70"
                    value={formData.weight}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select value={formData.bloodType} onValueChange={(value) => handleSelectChange("bloodType", value)}>
                    <SelectTrigger id="bloodType" className="mt-1">
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="medicalCondition">Medical Condition</Label>
                <Textarea
                  id="medicalCondition"
                  name="medicalCondition"
                  placeholder="Describe your current medical condition..."
                  value={formData.medicalCondition}
                  onChange={handleChange}
                  className="mt-1"
                  rows={4}
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="chronicDiseases">Chronic Diseases</Label>
                <Textarea
                  id="chronicDiseases"
                  name="chronicDiseases"
                  placeholder="List any chronic diseases, separated by commas..."
                  value={formData.chronicDiseases}
                  onChange={handleChange}
                  className="mt-1"
                  rows={4}
                />
                <p className="text-sm text-gray-500 mt-1">Enter any chronic diseases, separated by commas</p>
              </div>

              <div>
                <Label htmlFor="currentMedications">Current Medications</Label>
                <Textarea
                  id="currentMedications"
                  name="currentMedications"
                  placeholder="List any current medications, separated by commas..."
                  value={formData.currentMedications}
                  onChange={handleChange}
                  className="mt-1"
                  rows={4}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter any medications you are currently taking, separated by commas
                </p>
              </div>
            </div>

            {/* Password Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">At least 6 characters</p>
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 py-3">
              Register as Patient
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
