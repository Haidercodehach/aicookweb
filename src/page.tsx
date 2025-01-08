import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
          <div className="space-y-16">
            {/* Logo and tagline */}
            <div>
              <h2 className="text-[#FF6B00] font-medium text-xl">AiCook</h2>
              <p className="text-[#FF6B00] italic">Recipes you like</p>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-[#FF6B00] text-6xl font-bold tracking-tight font-roca">
                SMART<br />RECIPES
              </h1>
              <p className="text-gray-600 text-xl">
                Transform Ingredients into Culinary Masterpieces
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="#"
              className="inline-block bg-[#FF6B00] text-white px-8 py-3 rounded-md font-medium hover:bg-[#FF6B00]/90 transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Right Column - Image Grid */}
        <div className="relative bg-gray-50 p-8 grid grid-cols-2 gap-4">
          {/* Top row */}
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Noodles with shrimp"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Wooden plate"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Middle row */}
          <div className="relative aspect-square col-span-2">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Bento box lunch"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Bottom row */}
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Pink smoothie"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Yellow smoothie"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

