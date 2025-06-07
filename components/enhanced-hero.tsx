"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"

export function EnhancedHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />

      <motion.div className="max-w-5xl mx-auto text-center relative z-10" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Floating Sparkles */}
          <div className="absolute -top-10 left-1/4 animate-float">
            <Sparkles className="h-6 w-6 text-purple-400/60" />
          </div>
          <div className="absolute -top-5 right-1/3 animate-float" style={{ animationDelay: "2s" }}>
            <Sparkles className="h-4 w-4 text-pink-400/60" />
          </div>
          <div className="absolute top-5 left-1/3 animate-float" style={{ animationDelay: "4s" }}>
            <Sparkles className="h-5 w-5 text-blue-400/60" />
          </div>

          <motion.h1
            className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-8 tracking-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent animate-gradient text-glow">
              MN
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl sm:text-3xl text-slate-300 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Creative Designer",
                2000,
                "IoT Engineer",
                2000,
                "UI/UX Specialist",
                2000,
                "Tech Innovator",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="font-light bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-4"
          >
            Crafting digital experiences through the perfect blend of creative design and innovative engineering.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Specializing in IoT solutions, user-centered design, and cutting-edge web technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 rounded-full px-10 py-4 text-lg shadow-2xl shadow-purple-700/30 hover:shadow-purple-700/50 transition-all duration-300 animate-gradient"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              View My Work
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-500/40 text-slate-300 hover:bg-purple-500/20 rounded-full px-10 py-4 text-lg glass backdrop-blur-md"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-20"
        >
          {[
            { icon: <Github className="h-6 w-6" />, delay: 0, color: "from-purple-600 to-purple-800" },
            { icon: <Linkedin className="h-6 w-6" />, delay: 0.1, color: "from-blue-600 to-blue-800" },
            { icon: <Mail className="h-6 w-6" />, delay: 0.2, color: "from-pink-600 to-pink-800" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 1.6 + item.delay,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-2xl glass`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="animate-bounce"
        >
          <motion.a
            href="#about"
            className="inline-block p-3 rounded-full glass hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="h-6 w-6 text-slate-400" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
