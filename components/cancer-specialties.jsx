import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CancerSpecialties() {
  const specialties = [
    {
      id: "brain",
      title: "Brain Cancer",
      description: "Diagnosis and treatment of tumors that begin in the brain or spinal cord tissues.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "skin",
      title: "Skin Cancer",
      description: "Detection and treatment of abnormal growth of skin cells, including melanoma and carcinoma.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "chest",
      title: "Chest Cancer",
      description: "Focused on lung, pleural, and mediastinal cancers affecting the chest cavity.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cancer Specialties</h2>
          <p className="text-lg text-gray-600">
            We offer specialized diagnosis and treatment for various types of cancer, with dedicated doctors and
            advanced AI-powered diagnostics.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm card-hover"
            >
              <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full mb-6 bg-accent">
                <Image
                  src={specialty.icon || "/placeholder.svg"}
                  alt={specialty.title}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialty.title}</h3>
              <p className="text-gray-600 mb-6">{specialty.description}</p>
              <Link href={`/specialties/${specialty.id}`}>
                <Button variant="ghost" className="text-primary hover:bg-accent/50">
                  Learn more
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/specialties">
            <Button className="bg-primary hover:bg-primary/90 shadow-sm">View All Specialties</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
