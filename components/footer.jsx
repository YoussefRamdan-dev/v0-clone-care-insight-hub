import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-medium text-[#8b5cf6] mb-4">CareInsight</h3>
            <p className="text-gray-600 text-sm">
              Healthcare platform connecting patients with specialized care and medical resources.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#8b5cf6]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#8b5cf6]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#8b5cf6]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#8b5cf6]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register?type=patient" className="text-gray-600 hover:text-[#8b5cf6]">
                  Register as Patient
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-600 hover:text-[#8b5cf6]">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/dashboard/patient" className="text-gray-600 hover:text-[#8b5cf6]">
                  Patient Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register?type=doctor" className="text-gray-600 hover:text-[#8b5cf6]">
                  Register as Doctor
                </Link>
              </li>
              <li>
                <Link href="/dashboard/doctor" className="text-gray-600 hover:text-[#8b5cf6]">
                  Doctor Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 CareInsight. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-[#8b5cf6]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-[#8b5cf6]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
