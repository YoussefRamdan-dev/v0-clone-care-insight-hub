import Image from "next/image"

export default function LaboratoriesPage() {
  const laboratories = [
    {
      id: "imaging",
      name: "Advanced Imaging Laboratory",
      description: "State-of-the-art imaging facilities for precise cancer detection and monitoring.",
      services: [
        "MRI with AI-enhanced analysis",
        "PET-CT scanning",
        "High-resolution ultrasound",
        "Digital mammography",
        "Interventional radiology procedures",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "pathology",
      name: "Molecular Pathology Laboratory",
      description: "Comprehensive tissue analysis and genetic testing for cancer diagnosis and treatment planning.",
      services: [
        "Histopathological examination",
        "Immunohistochemistry",
        "Flow cytometry",
        "Cytogenetic analysis",
        "Next-generation sequencing",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "research",
      name: "Clinical Research Laboratory",
      description: "Cutting-edge research facilities developing new approaches to cancer diagnosis and treatment.",
      services: [
        "Biomarker discovery and validation",
        "Drug sensitivity testing",
        "Tumor microenvironment analysis",
        "Immunotherapy response prediction",
        "Clinical trial support",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Our Laboratories</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            CareInsight partners with advanced laboratories equipped with cutting-edge technology for accurate cancer
            diagnostics.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {laboratories.map((lab, index) => (
            <div
              key={lab.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={lab.image || "/placeholder.svg"}
                  alt={lab.name}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{lab.name}</h2>
                <p className="text-gray-600 mb-6">{lab.description}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Services:</h3>
                <ul className="space-y-2">
                  {lab.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
