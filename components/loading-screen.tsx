"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Sparkles, Code, Palette, Cpu } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentIcon, setCurrentIcon] = useState(0)

  const icons = [
    { icon: <Sparkles className="w-8 h-8" />, color: "text-purple-400" },
    { icon: <Code className="w-8 h-8" />, color: "text-blue-400" },
    { icon: <Palette className="w-8 h-8" />, color: "text-pink-400" },
    { icon: <Cpu className="w-8 h-8" />, color: "text-green-400" },
  ]

  useEffect(() => {
    const iconTimer = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 500)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          clearInterval(iconTimer)
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 120)

    return () => {
      clearInterval(progressTimer)
      clearInterval(iconTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#0a0118] flex items-center justify-center"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse-glow" />
          </div>

          <div className="text-center relative z-10">
            <motion.div
              className="w-20 h-20 mx-auto mb-8 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse-glow" />
              <div className="absolute inset-2 rounded-full bg-[#0a0118] flex items-center justify-center">
                <motion.div
                  key={currentIcon}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className={icons[currentIcon].color}
                >
                  {icons[currentIcon].icon}
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold gradient-text mb-4"
            >
              Mansi Nahar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 mb-8 text-lg"
            >
              Crafting Digital Excellence...
            </motion.p>

            <div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-500 text-sm"
            >
              {Math.round(progress)}% Complete
            </motion.p>

            {/* Loading dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
