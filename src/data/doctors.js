// Mock data for doctors with different specialties
export const doctors = [
  {
    id: "doctor1",
    name: "Dr. Sarah Johnson",
    specialty: "brain-cancer",
    specialtyDisplay: "Brain Cancer",
    avatar: "/placeholder.svg?height=150&width=150",
    rating: 4.9,
    reviews: 12,
    workplace: "Memorial Cancer Center",
    experience: 15,
    certifications: ["Board Certified Neurologist", "Brain Cancer Specialist"],
    bio: "Dr. Johnson is a leading neurologist specializing in brain cancer treatment with 15 years of experience. She has pioneered several innovative treatment approaches and is dedicated to providing compassionate care to her patients.",
    email: "sarah.johnson@careinsight.com",
    phone: "555-123-4567",
    availability: [
      { day: "Monday", slots: ["09:00 - 12:00", "13:00 - 17:00"] },
      { day: "Tuesday", slots: ["09:00 - 14:00"] },
      { day: "Thursday", slots: ["10:00 - 16:00"] },
      { day: "Friday", slots: ["09:00 - 12:00"] },
    ],
    posts: [
      {
        id: 1,
        title: "Understanding Glioblastoma: Symptoms and Treatment Options",
        excerpt: "Glioblastoma is an aggressive type of cancer that can occur in the brain or spinal cord...",
        date: "May 15, 2025",
      },
    ],
  },
  {
    id: "doctor2",
    name: "Dr. Michael Chen",
    specialty: "skin-cancer",
    specialtyDisplay: "Skin Cancer",
    avatar: "/placeholder.svg?height=150&width=150",
    rating: 4.8,
    reviews: 28,
    workplace: "City Dermatology Institute",
    experience: 12,
    certifications: ["Board Certified Dermatologist", "Skin Cancer Specialist", "Mohs Surgery Certified"],
    bio: "Dr. Chen is a dermatologist specializing in skin cancer detection and treatment. With 12 years of experience, he is an expert in Mohs surgery and other advanced treatment techniques for melanoma and non-melanoma skin cancers.",
    email: "michael.chen@careinsight.com",
    phone: "555-234-5678",
    availability: [
      { day: "Monday", slots: ["08:00 - 13:00"] },
      { day: "Wednesday", slots: ["09:00 - 17:00"] },
      { day: "Thursday", slots: ["09:00 - 15:00"] },
      { day: "Friday", slots: ["10:00 - 16:00"] },
    ],
    posts: [
      {
        id: 1,
        title: "The Importance of Regular Skin Checks",
        excerpt: "Regular skin examinations are crucial for early detection of skin cancer...",
        date: "April 28, 2025",
      },
      {
        id: 2,
        title: "Sun Protection: More Than Just Sunscreen",
        excerpt: "While sunscreen is essential, comprehensive sun protection involves several strategies...",
        date: "March 15, 2025",
      },
    ],
  },
  {
    id: "doctor3",
    name: "Dr. Emily Rodriguez",
    specialty: "chest-cancer",
    specialtyDisplay: "Chest Cancer",
    avatar: "/placeholder.svg?height=150&width=150",
    rating: 4.7,
    reviews: 19,
    workplace: "Pulmonary Oncology Center",
    experience: 10,
    certifications: ["Board Certified Pulmonologist", "Thoracic Oncology Specialist"],
    bio: "Dr. Rodriguez specializes in the diagnosis and treatment of lung and chest cancers. With 10 years of experience in pulmonary oncology, she focuses on personalized treatment plans that combine the latest medical advances with supportive care.",
    email: "emily.rodriguez@careinsight.com",
    phone: "555-345-6789",
    availability: [
      { day: "Tuesday", slots: ["09:00 - 15:00"] },
      { day: "Wednesday", slots: ["10:00 - 14:00"] },
      { day: "Thursday", slots: ["13:00 - 18:00"] },
      { day: "Friday", slots: ["09:00 - 13:00"] },
    ],
    posts: [],
  },
  {
    id: "doctor4",
    name: "Dr. James Wilson",
    specialty: "blood-cancer",
    specialtyDisplay: "Blood Cancer",
    avatar: "/placeholder.svg?height=150&width=150",
    rating: 4.9,
    reviews: 31,
    workplace: "Hematology Research Institute",
    experience: 18,
    certifications: ["Board Certified Hematologist", "Oncology Specialist", "Stem Cell Transplantation Certified"],
    bio: "Dr. Wilson is a hematologist-oncologist with 18 years of experience treating leukemia, lymphoma, and other blood cancers. He has been involved in numerous clinical trials and is passionate about bringing innovative treatments to his patients.",
    email: "james.wilson@careinsight.com",
    phone: "555-456-7890",
    availability: [
      { day: "Monday", slots: ["10:00 - 16:00"] },
      { day: "Tuesday", slots: ["09:00 - 13:00"] },
      { day: "Wednesday", slots: ["14:00 - 18:00"] },
      { day: "Thursday", slots: ["09:00 - 15:00"] },
    ],
    posts: [
      {
        id: 1,
        title: "Advances in Leukemia Treatment",
        excerpt: "Recent years have seen remarkable progress in how we treat various forms of leukemia...",
        date: "May 5, 2025",
      },
    ],
  },
  {
    id: "doctor5",
    name: "Dr. Olivia Thompson",
    specialty: "digestive-cancer",
    specialtyDisplay: "Digestive System Cancer",
    avatar: "/placeholder.svg?height=150&width=150",
    rating: 4.6,
    reviews: 24,
    workplace: "Gastroenterology Oncology Center",
    experience: 14,
    certifications: ["Board Certified Gastroenterologist", "Oncology Specialist"],
    bio: "Dr. Thompson specializes in cancers of the digestive system, including colorectal, pancreatic, and liver cancers. With 14 years of experience, she combines surgical expertise with the latest medical therapies to provide comprehensive care.",
    email: "olivia.thompson@careinsight.com",
    phone: "555-567-8901",
    availability: [
      { day: "Monday", slots: ["09:00 - 14:00"] },
      { day: "Wednesday", slots: ["10:00 - 16:00"] },
      { day: "Friday", slots: ["09:00 - 15:00"] },
    ],
    posts: [
      {
        id: 1,
        title: "Colorectal Cancer Screening: When and Why",
        excerpt: "Regular screening is essential for early detection of colorectal cancer...",
        date: "April 10, 2025",
      },
    ],
  },
  {
    id: "doctor6",
    name: "Dr. Robert Kim",
    specialty: "reproductive-cancer",
    specialtyDisplay: "Reproductive System Cancer",
    avatar: "/placeholder.svg?height=150&width=150",
    rating: 4.8,
    reviews: 22,
    workplace: "Women's Oncology Center",
    experience: 16,
    certifications: ["Board Certified Gynecologic Oncologist", "Robotic Surgery Specialist"],
    bio: "Dr. Kim is a gynecologic oncologist specializing in cancers of the reproductive system. With 16 years of experience, he is an expert in minimally invasive and robotic surgical techniques for treating ovarian, uterine, and cervical cancers.",
    email: "robert.kim@careinsight.com",
    phone: "555-678-9012",
    availability: [
      { day: "Tuesday", slots: ["09:00 - 16:00"] },
      { day: "Thursday", slots: ["10:00 - 15:00"] },
      { day: "Friday", slots: ["09:00 - 14:00"] },
    ],
    posts: [
      {
        id: 1,
        title: "HPV and Cervical Cancer: What You Need to Know",
        excerpt: "Understanding the link between HPV and cervical cancer is crucial for prevention...",
        date: "March 22, 2025",
      },
    ],
  },
]

export function getDoctorById(id) {
  return doctors.find((doctor) => doctor.id === id) || null
}

export function getDoctorsBySpecialty(specialty) {
  if (!specialty || specialty === "all") {
    return doctors
  }
  return doctors.filter((doctor) => doctor.specialty === specialty)
}
