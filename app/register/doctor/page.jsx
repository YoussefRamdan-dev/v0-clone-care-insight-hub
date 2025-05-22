"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function DoctorRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialty: "",
    workPlace: "",
    clinicLocation: "",
    certifications: "",
    workingHours: {
      monday: { enabled: false, start: "09:00", end: "17:00" },
      tuesday: { enabled: false, start: "09:00", end: "17:00" },
      wednesday: { enabled: false, start: "09:00", end: "17:00" },
      thursday: { enabled: false, start: "09:00", end: "17:00" },
      friday: { enabled: false, start: "09:00", end: "17:00" },
      saturday: { enabled: false, start: "09:00", end: "17:00" },
      sunday: { enabled: false, start: "09:00", end: "17:00" },
    },
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

  const handleWorkingHoursChange = (day, field, value) => {
    setFormData((prev) => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: {
          ...prev.workingHours[day],
          [field]: value,
        },
      },
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Doctor Registration data:", formData)
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
            <Link href="/register/patient" className="flex-1">
              <button className="w-full py-3 text-center bg-gray-100 text-gray-600">Register as Patient</button>
            </Link>
            <button className="flex-1 py-3 text-center bg-white font-medium text-black">Register as Doctor</button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Professional Information Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Dr. Jane Smith"
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
                    placeholder="doctor@example.com"
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
                  <Label htmlFor="specialty">Cancer Specialty</Label>
                  <Select
                    value={formData.specialty}
                    onValueChange={(value) => handleSelectChange("specialty", value)}
                    required
                  >
                    <SelectTrigger id="specialty" className="mt-1">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brain">Brain Cancer</SelectItem>
                      <SelectItem value="skin">Skin Cancer</SelectItem>
                      <SelectItem value="chest">Chest Cancer</SelectItem>
                      <SelectItem value="blood">Blood Cancer</SelectItem>
                      <SelectItem value="digestive">Digestive System Cancer</SelectItem>
                      <SelectItem value="reproductive">Reproductive System Cancer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="workPlace">Work Place</Label>
                  <Input
                    id="workPlace"
                    name="workPlace"
                    placeholder="City Hospital"
                    value={formData.workPlace}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="clinicLocation">Clinic Location</Label>
                  <Input
                    id="clinicLocation"
                    name="clinicLocation"
                    placeholder="123 Medical St, City"
                    value={formData.clinicLocation}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Certifications & Availability Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Certifications & Availability</h2>

              <div className="mb-6">
                <Label htmlFor="certifications">Professional Certifications</Label>
                <Textarea
                  id="certifications"
                  name="certifications"
                  placeholder="List your certifications, separated by commas..."
                  value={formData.certifications}
                  onChange={handleChange}
                  className="mt-1"
                  rows={4}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter your professional certifications, separated by commas
                </p>
              </div>

              <div>
                <Label className="mb-3 block">Working Hours</Label>

                {/* Monday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="monday"
                        checked={formData.workingHours.monday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("monday", "enabled", checked)}
                      />
                      <Label htmlFor="monday" className="ml-2 font-medium">
                        Monday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="mondayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="mondayStart"
                          type="time"
                          value={formData.workingHours.monday.start}
                          onChange={(e) => handleWorkingHoursChange("monday", "start", e.target.value)}
                          disabled={!formData.workingHours.monday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="mondayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="mondayEnd"
                          type="time"
                          value={formData.workingHours.monday.end}
                          onChange={(e) => handleWorkingHoursChange("monday", "end", e.target.value)}
                          disabled={!formData.workingHours.monday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tuesday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="tuesday"
                        checked={formData.workingHours.tuesday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("tuesday", "enabled", checked)}
                      />
                      <Label htmlFor="tuesday" className="ml-2 font-medium">
                        Tuesday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="tuesdayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="tuesdayStart"
                          type="time"
                          value={formData.workingHours.tuesday.start}
                          onChange={(e) => handleWorkingHoursChange("tuesday", "start", e.target.value)}
                          disabled={!formData.workingHours.tuesday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="tuesdayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="tuesdayEnd"
                          type="time"
                          value={formData.workingHours.tuesday.end}
                          onChange={(e) => handleWorkingHoursChange("tuesday", "end", e.target.value)}
                          disabled={!formData.workingHours.tuesday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wednesday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="wednesday"
                        checked={formData.workingHours.wednesday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("wednesday", "enabled", checked)}
                      />
                      <Label htmlFor="wednesday" className="ml-2 font-medium">
                        Wednesday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="wednesdayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="wednesdayStart"
                          type="time"
                          value={formData.workingHours.wednesday.start}
                          onChange={(e) => handleWorkingHoursChange("wednesday", "start", e.target.value)}
                          disabled={!formData.workingHours.wednesday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="wednesdayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="wednesdayEnd"
                          type="time"
                          value={formData.workingHours.wednesday.end}
                          onChange={(e) => handleWorkingHoursChange("wednesday", "end", e.target.value)}
                          disabled={!formData.workingHours.wednesday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thursday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="thursday"
                        checked={formData.workingHours.thursday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("thursday", "enabled", checked)}
                      />
                      <Label htmlFor="thursday" className="ml-2 font-medium">
                        Thursday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="thursdayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="thursdayStart"
                          type="time"
                          value={formData.workingHours.thursday.start}
                          onChange={(e) => handleWorkingHoursChange("thursday", "start", e.target.value)}
                          disabled={!formData.workingHours.thursday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="thursdayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="thursdayEnd"
                          type="time"
                          value={formData.workingHours.thursday.end}
                          onChange={(e) => handleWorkingHoursChange("thursday", "end", e.target.value)}
                          disabled={!formData.workingHours.thursday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Friday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="friday"
                        checked={formData.workingHours.friday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("friday", "enabled", checked)}
                      />
                      <Label htmlFor="friday" className="ml-2 font-medium">
                        Friday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="fridayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="fridayStart"
                          type="time"
                          value={formData.workingHours.friday.start}
                          onChange={(e) => handleWorkingHoursChange("friday", "start", e.target.value)}
                          disabled={!formData.workingHours.friday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="fridayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="fridayEnd"
                          type="time"
                          value={formData.workingHours.friday.end}
                          onChange={(e) => handleWorkingHoursChange("friday", "end", e.target.value)}
                          disabled={!formData.workingHours.friday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="saturday"
                        checked={formData.workingHours.saturday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("saturday", "enabled", checked)}
                      />
                      <Label htmlFor="saturday" className="ml-2 font-medium">
                        Saturday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="saturdayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="saturdayStart"
                          type="time"
                          value={formData.workingHours.saturday.start}
                          onChange={(e) => handleWorkingHoursChange("saturday", "start", e.target.value)}
                          disabled={!formData.workingHours.saturday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="saturdayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="saturdayEnd"
                          type="time"
                          value={formData.workingHours.saturday.end}
                          onChange={(e) => handleWorkingHoursChange("saturday", "end", e.target.value)}
                          disabled={!formData.workingHours.saturday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div className="border rounded-md p-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="sunday"
                        checked={formData.workingHours.sunday.enabled}
                        onCheckedChange={(checked) => handleWorkingHoursChange("sunday", "enabled", checked)}
                      />
                      <Label htmlFor="sunday" className="ml-2 font-medium">
                        Sunday
                      </Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <Label htmlFor="sundayStart" className="text-sm text-gray-500">
                          Start
                        </Label>
                        <Input
                          id="sundayStart"
                          type="time"
                          value={formData.workingHours.sunday.start}
                          onChange={(e) => handleWorkingHoursChange("sunday", "start", e.target.value)}
                          disabled={!formData.workingHours.sunday.enabled}
                        />
                      </div>
                      <div>
                        <Label htmlFor="sundayEnd" className="text-sm text-gray-500">
                          End
                        </Label>
                        <Input
                          id="sundayEnd"
                          type="time"
                          value={formData.workingHours.sunday.end}
                          onChange={(e) => handleWorkingHoursChange("sunday", "end", e.target.value)}
                          disabled={!formData.workingHours.sunday.enabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
              Register as Doctor
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
