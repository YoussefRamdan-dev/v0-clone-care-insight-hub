import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Advanced Cancer Care and Diagnostics
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with specialized cancer doctors, get AI-powered diagnostics, and manage your healthcare journey in
            one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-base font-medium shadow-sm">
                Register Now
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-gray-200 text-gray-700 hover:text-primary hover:border-primary px-8 py-3 rounded-md text-base font-medium"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
