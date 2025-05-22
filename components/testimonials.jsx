import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Care Insight Hub has transformed how our clinic operates. The analytics tools have helped us identify trends and improve patient outcomes significantly.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "The collaborative features have made it so much easier for our team to work together. We're more efficient and our patients are happier as a result.",
      author: "Michael Chen",
      role: "Healthcare Administrator",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "I appreciate how intuitive the platform is. It took minimal training for our staff to get up and running, and now we couldn't imagine working without it.",
      author: "Dr. Emily Rodriguez",
      role: "Family Physician",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Hear from our users
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Discover how Care Insight Hub is helping healthcare professionals improve patient care and streamline their
            workflows.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm italic">&ldquo;{testimonial.content}&rdquo;</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
