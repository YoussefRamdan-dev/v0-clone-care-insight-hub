export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">About CareInsight</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Learn about our mission to transform cancer care through technology and specialized expertise.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            At CareInsight, we're dedicated to revolutionizing cancer care by connecting patients with specialized
            doctors and leveraging AI technology to provide accurate diagnostics and personalized treatment plans. Our
            platform aims to make high-quality cancer care more accessible, efficient, and effective.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-8">
            We combine medical expertise with cutting-edge technology to offer comprehensive cancer care solutions. Our
            platform facilitates seamless collaboration between patients and specialists, while our AI-powered
            diagnostic tools help identify cancer types and recommend optimal treatment strategies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600">
            CareInsight was founded by a team of oncologists, healthcare professionals, and technology experts who share
            a common vision: to improve cancer care outcomes through innovation. Our network includes specialists in
            various cancer types, ensuring patients receive the most appropriate care for their specific conditions.
          </p>
        </div>
      </div>
    </div>
  )
}
