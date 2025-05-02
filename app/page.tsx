"use client"

import { useEffect, useState, useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen"
import GlitchText from "@/components/GlitchText/GlitchText"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleDownload = () => {
    window.open("https://download.openext.com", "_blank")
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="light min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col fade-in">

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`flex flex-col items-center justify-center min-h-[80vh] px-4 relative overflow-hidden`}
      >
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-black/10 dark:border-white/10"></div>
          ))}
        </div>

        <div className="text-center z-10 space-y-6">
          <div className="inline-block px-6 py-2 border border-black/20 dark:border-white/20 rounded-full text-sm mb-4 backdrop-blur-sm">
            <span className="text-green-600 dark:text-green-400">v1.0.0</span> Now Available
          </div>
          <GlitchText>OpeNext</GlitchText>
          <p className="text-2xl md:text-4xl font-mono mt-4 text-black/80 dark:text-white/80">
            World&apos;s Fastest CMS
          </p>
          <div className="mt-8 hover-scale">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-green-400 dark:hover:bg-green-400 hover:text-black dark:hover:text-black font-mono text-lg px-8 py-6 rounded-none border-2 border-black dark:border-white transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
          </div>
        </div>

          


      </section>
    </div>
  )
}
