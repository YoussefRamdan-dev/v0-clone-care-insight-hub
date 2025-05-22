import { Link } from "react-router-dom"
import Button from "../components/ui/Button"

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Specialized Cancer Care at Your Fingertips
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with top oncologists and cancer specialists for personalized treatment plans and expert care.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/doctors">
                  <Button className="w-full sm:w-auto px-8 py-3 text-base">Find a Doctor</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-base">
                    Join CareInsight
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Doctor consulting with patient"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Cancer Specialties</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our platform connects you with specialists across all cancer types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brain Cancer */}
            <div className="bg-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brain Cancer</h3>
              <p className="text-gray-600 mb-4">
                Specialized care for brain tumors and neurological cancers from expert neurosurgeons and
                neuro-oncologists.
              </p>
              <Link to="/specialties/brain-cancer" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Skin Cancer */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skin Cancer</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive care for melanoma and other skin cancers from dermatologists and surgical oncologists.
              </p>
              <Link to="/specialties/skin-cancer" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Chest Cancer */}
            <div className="bg-green-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chest Cancer</h3>
              <p className="text-gray-600 mb-4">
                Expert care for lung, esophageal, and other thoracic cancers from pulmonologists and thoracic surgeons.
              </p>
              <Link to="/specialties/chest-cancer" className="text-green-600 hover:text-green-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Blood Cancer */}
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blood Cancer</h3>
              <p className="text-gray-600 mb-4">
                Specialized treatment for leukemia, lymphoma, and myeloma from hematologists and oncologists.
              </p>
              <Link to="/specialties/blood-cancer" className="text-red-600 hover:text-red-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Digestive System Cancer */}
            <div className="bg-yellow-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digestive System Cancer</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive care for colorectal, pancreatic, and other GI cancers from gastroenterologists and
                surgeons.
              </p>
              <Link to="/specialties/digestive-cancer" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Reproductive System Cancer */}
            <div className="bg-pink-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reproductive System Cancer</h3>
              <p className="text-gray-600 mb-4">
                Specialized treatment for ovarian, uterine, prostate, and other reproductive cancers from gynecologic
                and urologic oncologists.
              </p>
              <Link to="/specialties/reproductive-cancer" className="text-pink-600 hover:text-pink-700 font-medium">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/specialties">
              <Button variant="outline">View All Specialties</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How CareInsight Works</h2>
            <p className="mt-4 text-xl text-gray-600">Simple steps to connect with specialized cancer care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find a Specialist</h3>
              <p className="text-gray-600">
                Search for cancer specialists based on cancer type, location, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book an Appointment</h3>
              <p className="text-gray-600">
                Schedule a consultation with your chosen specialist at a time that works for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Care</h3>
              <p className="text-gray-600">
                Get personalized treatment plans and ongoing care from your cancer specialist.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <Button>Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
