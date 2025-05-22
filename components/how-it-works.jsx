export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Register",
      description: "Create an account as a patient or doctor",
    },
    {
      number: "2",
      title: "Select Specialty",
      description: "Choose from brain, skin, or chest cancer specialists",
    },
    {
      number: "3",
      title: "Book Appointment",
      description: "Schedule a visit and upload diagnostic files",
    },
    {
      number: "4",
      title: "Get Results",
      description: "Receive AI-powered diagnosis and treatment plan",
    },
  ]

  return (
    <section className="section-padding bg-accent/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How CareInsight Works</h2>
          <p className="text-lg text-gray-600">
            Our platform connects patients with specialized doctors and uses AI to provide accurate diagnostics and
            personalized treatment plans.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full border-2 border-primary text-primary text-xl font-medium mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
