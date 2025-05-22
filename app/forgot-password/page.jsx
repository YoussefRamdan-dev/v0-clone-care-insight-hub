"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the password reset request
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-8">
          <Link href="/login" className="inline-flex items-center text-sm text-purple-500 hover:text-purple-600 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>

          <h1 className="text-2xl font-medium text-center mb-2">Reset Your Password</h1>
          <p className="text-gray-600 text-center mb-8">
            Enter your email address and we'll send you instructions to reset your password
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md transition-colors"
              >
                Send Reset Instructions
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                <p>
                  If an account exists with the email <strong>{email}</strong>, you will receive password reset
                  instructions.
                </p>
              </div>
              <Link href="/login">
                <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                  Return to Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
