"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar, Award, Target, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
          >
            <Heart className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Graphic designer and frontend developer with a strong foundation in creating beautiful and functional digital experiences. My journey combines creative design thinking with technical implementation skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a third-year Computer Science Engineering student with a specialization in Internet of Things (IoT)
                at SRM Institue of Science and Technology, Kattankulathur, Chennai. My journey combines the analytical mindset of an engineer
                with the creative vision of a designer.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in crafting intuitive user interfaces and implementing them using modern web technologies. My approach focuses on creating seamless user experiences while maintaining clean and efficient code.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not designing or coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  text: "Bachelor's in Computer Science and Engineering w/s IoT",
                  color: "from-purple-600 to-purple-800",
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  text: "Chennai, Tamil Nadu, India",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  icon: <Calendar className="h-6 w-6" />,
                  text: "Third Year Student",
                  color: "from-green-600 to-green-800",
                },
                {
                  icon: <Target className="h-6 w-6" />,
                  text: "Graphic Designer & Frontend Developer",
                  color: "from-pink-600 to-pink-800",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "7+", text: "Projects Completed", color: "from-purple-400 to-purple-600", icon: "🚀" },
                { number: "2+", text: "Years Experience", color: "from-pink-400 to-pink-600", icon: "⏰" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass border-white/20 overflow-hidden relative group h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                    <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
                        {item.number}
                      </div>
                      <div className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                        {item.text}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="max-w-sm mx-auto"
            >
              <Card className="glass border-white/20 overflow-hidden relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-center">
                  <div className="text-4xl mb-4">❤️</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
                    100%
                  </div>
                  <div className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                    Dedication
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
