"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Star, Instagram } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["UI/UX Designer", "Frontend Developer", "Creative Developer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
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

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {[
          { left: "76.65%", top: "56.53%" },
          { left: "89.95%", top: "0.83%" },
          { left: "93.62%", top: "96.09%" },
          { left: "62.17%", top: "98.31%" },
          { left: "66.28%", top: "73.23%" },
          { left: "45.13%", top: "56.88%" },
          { left: "73.54%", top: "62.23%" },
          { left: "1.39%", top: "30.75%" }
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            <Star className="h-4 w-4 text-purple-400/40" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="gradient-text text-glow">Mansi Nahar S</span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl text-slate-300 mb-4 h-6 flex items-center justify-start lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-light bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base sm:text-lg text-slate-400 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-6"
            >
              Passionate about creating beautiful and functional digital experiences. Specializing in UI/UX design and frontend development, I combine creativity with technical expertise to build engaging web applications.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <motion.a
                  href="https://github.com/mansinaharrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mansi-nahar-534035351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/_mansinahar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:mansinahar2020@gmail.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 relative z-50 opacity-100"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-2xl shadow-purple-700/30 hover:shadow-purple-700/50 transition-all duration-300 animate-gradient neon-glow"
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500/40 text-slate-300 hover:bg-purple-500/20 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base glass backdrop-blur-md hover:border-purple-400/60 transition-all duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Mansi Nahar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Error loading image:', e);
                    // Try loading the JPG version if PNG fails
                    const img = e.target as HTMLImageElement;
                    img.src = '/profile.jpg';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <motion.a
          href="#about"
          className="inline-block p-2 sm:p-3 rounded-full glass hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
        </motion.a>
      </motion.div>
    </section>
  )
}
