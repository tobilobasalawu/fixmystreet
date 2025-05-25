import ReportForm from '@/components/ReportForm'

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Report an Issue
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Help make your community better by reporting local issues. Fill out the form below with details about the problem.
          </p>
        </div>
        <ReportForm />
      </div>
    </main>
  )
} 