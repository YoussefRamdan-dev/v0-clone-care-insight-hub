"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Upload, Save, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function EditProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("profile")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(null)

  const [formData, setFormData] = useState({
    fullName: "Dr. Sarah Johnson",
    email: "doctor@example.com",
    phone: "555-123-4567",
    specialty: "Brain Cancer",
    workPlace: "Memorial Cancer Center",
    clinicLocation: "123 Medical St, City",
    yearsOfExperience: "15",
    professionalBio:
      "Dr. Johnson is a leading neurologist specializing in brain cancer treatment with 15 years of experience.",
    certifications: "Board Certified Neurologist, Brain Cancer Specialist",
    education: "MD from Harvard Medical School, Oncology Fellowship at Mayo Clinic",
    avatar: "/placeholder.svg?height=150&width=150",
    workingHours: {
      monday: { enabled: true, start: "09:00", end: "17:00" },
      tuesday: { enabled: true, start: "09:00", end: "14:00" },
      wednesday: { enabled: false, start: "09:00", end: "17:00" },
      thursday: { enabled: true, start: "10:00", end: "16:00" },
      friday: { enabled: true, start: "09:00", end: "12:00" },
      saturday: { enabled: false, start: "09:00", end: "12:00" },
      sunday: { enabled: false, start: "09:00", end: "12:00" },
    },
    notifications: {
      appointments: true,
      messages: true,
      patientUpdates: true,
      email: true,
    },
  })

  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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

  const handleNotificationChange = (name, checked) => {
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked,
      },
    }))
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAvatarPreview = () => {
    setAvatarPreview(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Saving profile data:", formData)
      // Here you would typically send the data to your API

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      })

      setIsSubmitting(false)
      router.push("/profile")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.push("/profile")}
            className="flex items-center text-gray-600 hover:text-purple-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Profile</span>
          </button>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Your Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Column - Photo */}
          <div className="md:col-span-1">
            <Card className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center">
              <div className="relative mb-4">
                <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview || "/placeholder.svg"}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={formData.avatar || "/placeholder.svg"}
                      alt={formData.fullName}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                {avatarPreview && (
                  <button
                    onClick={removeAvatarPreview}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow-sm"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <h2 className="text-xl font-semibold text-center">{formData.fullName}</h2>
              <p className="text-gray-500 text-center">Doctor</p>

              <div className="mt-4 w-full">
                <label htmlFor="avatar-upload" className="w-full">
                  <div className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Photo
                  </div>
                  <input
                    id="avatar-upload"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-3">
            <Tabs defaultValue="profile" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="availability"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                >
                  Availability
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                >
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-4">
                <form onSubmit={handleSubmit}>
                  <Card className="p-6 bg-white rounded-lg shadow-sm mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
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
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="workPlace">Work Place</Label>
                        <Input
                          id="workPlace"
                          name="workPlace"
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
                          value={formData.clinicLocation}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="specialty">Specialty</Label>
                        <Select
                          value={formData.specialty}
                          onValueChange={(value) => handleSelectChange("specialty", value)}
                        >
                          <SelectTrigger id="specialty" className="mt-1">
                            <SelectValue placeholder="Select specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Brain Cancer">Brain Cancer</SelectItem>
                            <SelectItem value="Skin Cancer">Skin Cancer</SelectItem>
                            <SelectItem value="Chest Cancer">Chest Cancer</SelectItem>
                            <SelectItem value="Blood Cancer">Blood Cancer</SelectItem>
                            <SelectItem value="Digestive System Cancer">Digestive System Cancer</SelectItem>
                            <SelectItem value="Reproductive System Cancer">Reproductive System Cancer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                        <Input
                          id="yearsOfExperience"
                          name="yearsOfExperience"
                          type="number"
                          value={formData.yearsOfExperience}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="professionalBio">Professional Bio</Label>
                      <Textarea
                        id="professionalBio"
                        name="professionalBio"
                        value={formData.professionalBio}
                        onChange={handleChange}
                        className="mt-1"
                        rows={4}
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Briefly describe your professional background and expertise
                      </p>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="certifications">Certifications</Label>
                      <Textarea
                        id="certifications"
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleChange}
                        className="mt-1"
                        rows={3}
                        placeholder="Enter your certifications, separated by commas"
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="education">Education</Label>
                      <Textarea
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="mt-1"
                        rows={3}
                        placeholder="Enter your educational background"
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-gray-300"
                        onClick={() => router.push("/profile")}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-purple-500 hover:bg-purple-600" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                </form>
              </TabsContent>

              <TabsContent value="availability" className="mt-4">
                <Card className="p-6 bg-white rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Availability Settings</h3>

                  <div className="space-y-6">
                    <p className="text-gray-600">Set your working days and hours for patient appointments:</p>

                    {/* Working Days and Hours */}
                    <div className="space-y-4">
                      {/* Monday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="monday-enabled"
                              checked={formData.workingHours.monday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("monday", "enabled", checked)}
                            />
                            <Label htmlFor="monday-enabled" className="ml-2 font-medium">
                              Monday
                            </Label>
                          </div>
                          <div className={formData.workingHours.monday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="monday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="monday-start"
                              type="time"
                              value={formData.workingHours.monday.start}
                              onChange={(e) => handleWorkingHoursChange("monday", "start", e.target.value)}
                              disabled={!formData.workingHours.monday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="monday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="monday-end"
                              type="time"
                              value={formData.workingHours.monday.end}
                              onChange={(e) => handleWorkingHoursChange("monday", "end", e.target.value)}
                              disabled={!formData.workingHours.monday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Tuesday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="tuesday-enabled"
                              checked={formData.workingHours.tuesday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("tuesday", "enabled", checked)}
                            />
                            <Label htmlFor="tuesday-enabled" className="ml-2 font-medium">
                              Tuesday
                            </Label>
                          </div>
                          <div className={formData.workingHours.tuesday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="tuesday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="tuesday-start"
                              type="time"
                              value={formData.workingHours.tuesday.start}
                              onChange={(e) => handleWorkingHoursChange("tuesday", "start", e.target.value)}
                              disabled={!formData.workingHours.tuesday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="tuesday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="tuesday-end"
                              type="time"
                              value={formData.workingHours.tuesday.end}
                              onChange={(e) => handleWorkingHoursChange("tuesday", "end", e.target.value)}
                              disabled={!formData.workingHours.tuesday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Wednesday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="wednesday-enabled"
                              checked={formData.workingHours.wednesday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("wednesday", "enabled", checked)}
                            />
                            <Label htmlFor="wednesday-enabled" className="ml-2 font-medium">
                              Wednesday
                            </Label>
                          </div>
                          <div className={formData.workingHours.wednesday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="wednesday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="wednesday-start"
                              type="time"
                              value={formData.workingHours.wednesday.start}
                              onChange={(e) => handleWorkingHoursChange("wednesday", "start", e.target.value)}
                              disabled={!formData.workingHours.wednesday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="wednesday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="wednesday-end"
                              type="time"
                              value={formData.workingHours.wednesday.end}
                              onChange={(e) => handleWorkingHoursChange("wednesday", "end", e.target.value)}
                              disabled={!formData.workingHours.wednesday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Thursday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="thursday-enabled"
                              checked={formData.workingHours.thursday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("thursday", "enabled", checked)}
                            />
                            <Label htmlFor="thursday-enabled" className="ml-2 font-medium">
                              Thursday
                            </Label>
                          </div>
                          <div className={formData.workingHours.thursday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="thursday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="thursday-start"
                              type="time"
                              value={formData.workingHours.thursday.start}
                              onChange={(e) => handleWorkingHoursChange("thursday", "start", e.target.value)}
                              disabled={!formData.workingHours.thursday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="thursday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="thursday-end"
                              type="time"
                              value={formData.workingHours.thursday.end}
                              onChange={(e) => handleWorkingHoursChange("thursday", "end", e.target.value)}
                              disabled={!formData.workingHours.thursday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Friday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="friday-enabled"
                              checked={formData.workingHours.friday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("friday", "enabled", checked)}
                            />
                            <Label htmlFor="friday-enabled" className="ml-2 font-medium">
                              Friday
                            </Label>
                          </div>
                          <div className={formData.workingHours.friday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="friday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="friday-start"
                              type="time"
                              value={formData.workingHours.friday.start}
                              onChange={(e) => handleWorkingHoursChange("friday", "start", e.target.value)}
                              disabled={!formData.workingHours.friday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="friday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="friday-end"
                              type="time"
                              value={formData.workingHours.friday.end}
                              onChange={(e) => handleWorkingHoursChange("friday", "end", e.target.value)}
                              disabled={!formData.workingHours.friday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Saturday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="saturday-enabled"
                              checked={formData.workingHours.saturday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("saturday", "enabled", checked)}
                            />
                            <Label htmlFor="saturday-enabled" className="ml-2 font-medium">
                              Saturday
                            </Label>
                          </div>
                          <div className={formData.workingHours.saturday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="saturday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="saturday-start"
                              type="time"
                              value={formData.workingHours.saturday.start}
                              onChange={(e) => handleWorkingHoursChange("saturday", "start", e.target.value)}
                              disabled={!formData.workingHours.saturday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="saturday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="saturday-end"
                              type="time"
                              value={formData.workingHours.saturday.end}
                              onChange={(e) => handleWorkingHoursChange("saturday", "end", e.target.value)}
                              disabled={!formData.workingHours.saturday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Sunday */}
                      <div className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Checkbox
                              id="sunday-enabled"
                              checked={formData.workingHours.sunday.enabled}
                              onCheckedChange={(checked) => handleWorkingHoursChange("sunday", "enabled", checked)}
                            />
                            <Label htmlFor="sunday-enabled" className="ml-2 font-medium">
                              Sunday
                            </Label>
                          </div>
                          <div className={formData.workingHours.sunday.enabled ? "text-gray-700" : "text-gray-400"}>
                            Working Day
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="sunday-start" className="text-sm text-gray-500">
                              Start Time
                            </Label>
                            <Input
                              id="sunday-start"
                              type="time"
                              value={formData.workingHours.sunday.start}
                              onChange={(e) => handleWorkingHoursChange("sunday", "start", e.target.value)}
                              disabled={!formData.workingHours.sunday.enabled}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="sunday-end" className="text-sm text-gray-500">
                              End Time
                            </Label>
                            <Input
                              id="sunday-end"
                              type="time"
                              value={formData.workingHours.sunday.end}
                              onChange={(e) => handleWorkingHoursChange("sunday", "end", e.target.value)}
                              disabled={!formData.workingHours.sunday.enabled}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-gray-300"
                        onClick={() => router.push("/profile")}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        className="bg-purple-500 hover:bg-purple-600"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-4">
                <Card className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Notification Settings</h3>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Appointment Reminders</h4>
                          <p className="text-sm text-gray-500">Receive notifications about upcoming appointments</p>
                        </div>
                        <Switch
                          checked={formData.notifications.appointments}
                          onCheckedChange={(checked) => handleNotificationChange("appointments", checked)}
                          id="appointment-notifications"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">New Messages</h4>
                          <p className="text-sm text-gray-500">Get notified when you receive new messages</p>
                        </div>
                        <Switch
                          checked={formData.notifications.messages}
                          onCheckedChange={(checked) => handleNotificationChange("messages", checked)}
                          id="message-notifications"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Patient Updates</h4>
                          <p className="text-sm text-gray-500">
                            Receive updates when patients modify their information
                          </p>
                        </div>
                        <Switch
                          checked={formData.notifications.patientUpdates}
                          onCheckedChange={(checked) => handleNotificationChange("patientUpdates", checked)}
                          id="patient-notifications"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                          <p className="text-sm text-gray-500">
                            Receive email notifications in addition to in-app alerts
                          </p>
                        </div>
                        <Switch
                          checked={formData.notifications.email}
                          onCheckedChange={(checked) => handleNotificationChange("email", checked)}
                          id="email-notifications"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Notification Preferences</h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Choose how you want to receive notifications from CareInsight
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox id="notify-app" defaultChecked />
                          <Label htmlFor="notify-app" className="ml-2 text-sm">
                            In-app notifications
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="notify-email" defaultChecked />
                          <Label htmlFor="notify-email" className="ml-2 text-sm">
                            Email
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="notify-sms" />
                          <Label htmlFor="notify-sms" className="ml-2 text-sm">
                            SMS
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-gray-300"
                        onClick={() => router.push("/profile")}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        className="bg-purple-500 hover:bg-purple-600"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Save Preferences
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
