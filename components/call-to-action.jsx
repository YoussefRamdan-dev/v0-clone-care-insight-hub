import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <div className="bg-teal-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to transform your practice?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-teal-100">
          Join thousands of healthcare professionals who are already using Care Insight Hub to improve patient outcomes
          and streamline their workflows.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50">
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-800 hover:bg-teal-900"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
