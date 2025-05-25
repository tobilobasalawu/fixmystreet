import Link from 'next/link'
import { MapPinIcon, CameraIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '700' })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src="/street.jpg"
          alt="Community hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-3xl mx-auto px-4 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Make Your Street Safer, Cleaner, Better
          </h1>
          <span
            className={`block text-3xl md:text-5xl text-white italic mb-8 ${dancingScript.className}`}
          >
            powered by your community
          </span>
          <Button asChild size="lg" className="text-lg bg-green-500 text-white hover:bg-green-600 font-semibold w-fit">
            <Link href="/report">Report an Issue</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <MapPinIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">1. Spot an Issue</h3>
                <p className="text-gray-600 text-center">
                  Notice a problem in your area? Take a photo and note the location.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <CameraIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">2. Report It</h3>
                <p className="text-gray-600 text-center">
                  Upload your photo and details through our website or mobile app.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <ArrowPathIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">3. Track Progress</h3>
                <p className="text-gray-600 text-center">
                  Follow the status of your report and get notified when it's fixed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You Can Report</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Potholes',
              'Broken Streetlights',
              'Graffiti',
              'Fly-tipping',
              'Damaged Pavements',
              'Blocked Drains'
            ].map((category) => (
              <Card key={category} className="bg-white border border-gray-100">
                <CardContent className="p-6 flex items-center justify-center">
                  <h3 className="text-xl font-semibold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join thousands of citizens making their communities better, one report at a time.
          </p>
          <Button asChild size="lg" className="text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/report">Report an Issue Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
