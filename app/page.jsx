import Hero from "@/components/hero"
import CancerSpecialties from "@/components/cancer-specialties"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CancerSpecialties />
      <HowItWorks />
    </div>
  )
}
