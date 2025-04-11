"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export default function LoadingScreen() {
  const [loadingText, setLoadingText] = useState("Initializing")
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Initializing...") return "Initializing"
        return prev + "."
      })
    }, 300)

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-white dark:bg-black flex flex-col items-center justify-center z-50">
      <div className="mb-8 terminal-pulse">
        <Terminal className="h-16 w-16 text-black dark:text-white" />
      </div>

      <div className="text-center fade-in">
        <h1 className="text-4xl font-bold font-mono mb-2 text-black dark:text-white">OpeNEXT</h1>
        <p className="text-black/60 dark:text-white/60 font-mono text-lg mb-8">{loadingText}</p>

        <div className="w-64 h-2 bg-black/20 dark:bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-600 dark:bg-green-400 transition-all duration-200"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>

        <p className="text-black/40 dark:text-white/40 font-mono text-sm mt-2">{Math.round(loadingProgress)}%</p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-black/30 dark:text-white/30 font-mono text-xs">World&apos;s Fastest CMS</p>
      </div>

      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-black/10 dark:border-white/10"></div>
        ))}
      </div>
    </div>
  )
}
