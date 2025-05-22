import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpecialtiesPage() {
  const specialties = [
    {
      id: "brain",
      title: "Brain Cancer",
      description: "Diagnosis and treatment of tumors that begin in the brain or spinal cord tissues.",
      longDescription:
        "Our brain cancer specialists focus on diagnosing and treating various types of brain and spinal cord tumors. We use advanced imaging techniques and AI-assisted analysis to identify tumor location, type, and stage, allowing for precise treatment planning. Our team includes neurosurgeons, neuro-oncologists, and radiation specialists who work together to develop personalized treatment approaches.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "skin",
      title: "Skin Cancer",
      description: "Detection and treatment of abnormal growth of skin cells, including melanoma and carcinoma.",
      longDescription:
        "Our dermatological oncology team specializes in the detection and treatment of all types of skin cancers, including melanoma, basal cell carcinoma, and squamous cell carcinoma. We employ advanced imaging and AI-powered analysis of skin lesions to identify cancerous cells at early stages. Our treatment approaches range from minimally invasive procedures to comprehensive surgical interventions, depending on the cancer type and stage.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "chest",
      title: "Chest Cancer",
      description: "Focused on lung, pleural, and mediastinal cancers affecting the chest cavity.",
      longDescription:
        "Our chest cancer specialists address various malignancies affecting the chest cavity, including lung cancer, pleural mesothelioma, and mediastinal tumors. We utilize state-of-the-art diagnostic tools and AI analysis of imaging studies to accurately identify and stage these cancers. Our multidisciplinary team includes thoracic surgeons, pulmonologists, and oncologists who collaborate to provide comprehensive treatment plans tailored to each patient's specific condition.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "blood",
      title: "Blood Cancer",
      description: "Treatment of leukemia, lymphoma, myeloma, and other cancers affecting blood cells and bone marrow.",
      longDescription:
        "Our hematological oncology team specializes in diagnosing and treating cancers that affect the blood, bone marrow, and lymphatic system. This includes leukemias, lymphomas, myelomas, and myelodysplastic syndromes. We employ advanced blood analysis, bone marrow examination, and genetic testing to accurately identify these conditions. Our treatment approaches include chemotherapy, immunotherapy, targeted therapy, and stem cell transplantation when appropriate.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "digestive",
      title: "Digestive System Cancer",
      description: "Specialized care for cancers affecting the esophagus, stomach, liver, pancreas, and intestines.",
      longDescription:
        "Our gastrointestinal oncology specialists focus on cancers affecting the digestive system, including esophageal, gastric, liver, pancreatic, and colorectal cancers. We use advanced endoscopic techniques, imaging studies, and AI-assisted analysis to detect and stage these cancers. Our multidisciplinary approach involves gastroenterologists, surgical oncologists, and radiation specialists who work together to develop comprehensive treatment strategies.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
    {
      id: "reproductive",
      title: "Reproductive System Cancer",
      description: "Diagnosis and treatment of cancers affecting reproductive organs in both men and women.",
      longDescription:
        "Our reproductive oncology team specializes in cancers affecting the reproductive organs, including ovarian, uterine, cervical, prostate, and testicular cancers. We employ advanced imaging, minimally invasive diagnostic procedures, and AI-assisted analysis to accurately identify and stage these cancers. Our specialists include gynecologic oncologists, urologic oncologists, and radiation therapists who collaborate to provide personalized treatment approaches.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100",
    },
  ]

  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cancer Specialties</h1>
          <p className="text-lg text-gray-600">
            We offer specialized diagnosis and treatment for various types of cancer, with dedicated doctors and
            advanced AI-powered diagnostics.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0 h-20 w-20 flex items-center justify-center rounded-full bg-accent">
                  <Image
                    src={specialty.icon || "/placeholder.svg"}
                    alt={specialty.title}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{specialty.title}</h2>
                  <p className="text-gray-600 mb-4 font-medium">{specialty.description}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{specialty.longDescription}</p>
                  <div>
                    <Link href={`/specialties/${specialty.id}`}>
                      <Button className="bg-primary hover:bg-primary/90 shadow-sm">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
