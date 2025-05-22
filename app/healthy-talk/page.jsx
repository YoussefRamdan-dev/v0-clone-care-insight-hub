"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Heart, MessageSquare, Calendar, Plus, Search } from "lucide-react"
import { doctors } from "@/lib/doctors-data"

export default function HealthyTalkPage() {
  const [activeTab, setActiveTab] = useState("latest")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedDoctor, setSelectedDoctor] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Understanding Seasonal Allergies",
      content:
        "Seasonal allergies, also known as hay fever or allergic rhinitis, affect millions of people worldwide. They occur when your immune system reacts to an outdoor allergen, such as pollen. Symptoms often include sneezing, congestion, runny nose, and itchy or watery eyes. While these symptoms may make y...",
      author: doctors.find((d) => d.id === "doctor1"),
      date: "Mar 15, 2025",
      tags: ["allergies", "seasonal", "health tips"],
      likes: 2,
      comments: [
        {
          id: 1,
          author: {
            name: "Michael Brown",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content: "This is very helpful! I've been struggling with allergies this spring.",
          date: "Mar 16",
        },
      ],
      commentCount: 1,
    },
    {
      id: 2,
      title: "Nutrition Basics: Building a Balanced Diet",
      content:
        "A balanced diet gives your body the nutrients it needs to function correctly. To get the nutrition you need, most of your daily calories should come from fresh fruits, fresh vegetables, whole grains, legumes, nuts, and lean proteins. Try to limit highly processed foods, which often contain added su...",
      author: doctors.find((d) => d.id === "doctor5"),
      date: "Feb 28, 2025",
      tags: ["nutrition", "diet", "health"],
      likes: 3,
      comments: [],
      commentCount: 0,
    },
    {
      id: 3,
      title: "The Importance of Regular Cancer Screenings",
      content:
        "Regular cancer screenings are vital for early detection and successful treatment. Different types of cancer require different screening methods and schedules. For example, mammograms are recommended for breast cancer screening, while colonoscopies are used to detect colorectal cancer. Speak with your doctor about which screenings are appropriate for you based on your age, family history, and risk factors...",
      author: doctors.find((d) => d.id === "doctor2"),
      date: "Feb 15, 2025",
      tags: ["cancer", "prevention", "screenings"],
      likes: 5,
      comments: [],
      commentCount: 2,
    },
    {
      id: 4,
      title: "Advances in Leukemia Treatment",
      content:
        "Recent years have seen remarkable progress in how we treat various forms of leukemia. From targeted therapies to immunotherapies, these new approaches are improving outcomes and quality of life for patients. Understanding the latest treatment options can help patients make informed decisions about their care...",
      author: doctors.find((d) => d.id === "doctor4"),
      date: "Jan 20, 2025",
      tags: ["leukemia", "blood cancer", "treatment"],
      likes: 7,
      comments: [],
      commentCount: 3,
    },
  ]

  // Filter articles based on selected filters and search query
  const filteredArticles = articles.filter((article) => {
    // Filter by specialty
    if (selectedSpecialty !== "all" && article.author.specialty !== selectedSpecialty) {
      return false
    }

    // Filter by doctor
    if (selectedDoctor !== "all" && article.author.id !== selectedDoctor) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.author.name.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return true
  })

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Healthy Talk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert medical insights, tips, and discussions from our community of healthcare professionals and patients
          </p>
        </div>

        {/* Search and Create Post */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with filters */}
          <div className="w-full md:w-64 space-y-6">
            {/* Filter by Specialty */}
            <Card className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Specialty</h2>
              <RadioGroup value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <RadioGroupItem value="all" id="all-specialties" />
                    <Label htmlFor="all-specialties" className="ml-2 cursor-pointer">
                      All Specialties
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="brain-cancer" id="brain-cancer" />
                    <Label htmlFor="brain-cancer" className="ml-2 cursor-pointer">
                      Brain Cancer
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="skin-cancer" id="skin-cancer" />
                    <Label htmlFor="skin-cancer" className="ml-2 cursor-pointer">
                      Skin Cancer
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="chest-cancer" id="chest-cancer" />
                    <Label htmlFor="chest-cancer" className="ml-2 cursor-pointer">
                      Chest Cancer
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="blood-cancer" id="blood-cancer" />
                    <Label htmlFor="blood-cancer" className="ml-2 cursor-pointer">
                      Blood Cancer
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </Card>

            {/* Filter by Doctor */}
            <Card className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Doctor</h2>
              <RadioGroup value={selectedDoctor} onValueChange={setSelectedDoctor}>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <RadioGroupItem value="all" id="all-doctors" />
                    <Label htmlFor="all-doctors" className="ml-2 cursor-pointer">
                      All Doctors
                    </Label>
                  </div>
                  {doctors.map((doctor) => (
                    <div key={doctor.id} className="flex items-center">
                      <RadioGroupItem value={doctor.id} id={doctor.id} />
                      <Label htmlFor={doctor.id} className="ml-2 cursor-pointer">
                        {doctor.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </Card>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "latest"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("latest")}
              >
                Latest
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "popular"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "featured"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("featured")}
              >
                Featured
              </button>
            </div>

            {/* Articles */}
            <div className="space-y-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Card key={article.id} className="p-6 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Link href={`/doctor/${article.author.id}`}>
                        <Avatar className="h-12 w-12 rounded-full bg-gray-200 cursor-pointer">
                          <img
                            src={article.author.avatar || "/placeholder.svg"}
                            alt={article.author.name}
                            className="h-12 w-12 rounded-full"
                          />
                        </Avatar>
                      </Link>
                      <div className="ml-3">
                        <Link href={`/doctor/${article.author.id}`}>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
                            {article.author.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500">{article.author.specialtyDisplay}</p>
                      </div>
                      <div className="ml-auto flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{article.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
                    <p className="text-gray-700 mb-4">
                      {article.content}{" "}
                      <span className="text-purple-500 hover:underline cursor-pointer">Read more</span>
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-gray-500">
                      <button className="flex items-center mr-4 hover:text-purple-500">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{article.likes}</span>
                      </button>
                      <button className="flex items-center hover:text-purple-500">
                        <MessageSquare className="h-5 w-5 mr-1" />
                        <span>{article.commentCount}</span>
                      </button>
                    </div>

                    {article.comments && article.comments.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {article.comments.map((comment) => (
                          <div key={comment.id} className="flex items-start mb-4 bg-gray-50 p-3 rounded-lg">
                            <Avatar className="h-8 w-8 rounded-full bg-gray-200">
                              <img
                                src={comment.author.avatar || "/placeholder.svg"}
                                alt={comment.author.name}
                                className="h-8 w-8 rounded-full"
                              />
                            </Avatar>
                            <div className="ml-3 flex-1">
                              <div className="flex justify-between">
                                <h4 className="text-sm font-medium text-gray-900">{comment.author.name}</h4>
                                <span className="text-xs text-gray-500">{comment.date}</span>
                              </div>
                              <p className="text-sm text-gray-700">{comment.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
