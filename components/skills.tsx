"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Cpu, Globe, Zap, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const skillCategories = [
    {
      title: "Design",
      icon: <Palette className="h-7 w-7" />,
      skills: ["UI/UX Design", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Wireframing", "Prototyping", "Canva"],
      color: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      glowColor: "shadow-pink-500/20",
      level: 95,
    },
    {
      title: "Frontend & Backend Development",
      icon: <Globe className="h-7 w-7" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Node.js"],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
      level: 90,
    },
    {
      title: "Programming",
      icon: <Code className="h-7 w-7" />,
      skills: ["C", "C++", "Python", "Java", "JavaScript", "MySQL", "Git"],
      color: "from-purple-500 via-violet-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
      level: 88,
    },
  ]

  return (
    <section id="skills" className="py-32 px-8 sm:px-12 lg:px-16 bg-[#0a0118]/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
          >
            <Zap className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">Skills & Expertise</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning design, development, and emerging technologies with years of hands-on
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="h-full"
            >
              <Card
                className={`glass border-2 ${category.borderColor} hover:border-opacity-60 transition-all duration-500 relative overflow-hidden group h-full flex flex-col ${
                  hoveredCard === index ? `shadow-2xl ${category.glowColor}` : "shadow-lg"
                }`}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Skill level indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${category.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                  />
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.icon}
                  </motion.div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-xl font-semibold">{category.title}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(category.level / 20) ? "text-yellow-400 fill-current" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-slate-400 mb-2">Proficiency: {category.level}%</div>
                </CardHeader>

                <CardContent className="relative z-10 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + skillIndex * 0.05 + 0.8,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`${category.bgColor} text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Docker",
              "AWS",
              "Firebase",
              "MongoDB",
              "PostgreSQL",
              "GraphQL",
              "REST APIs",
              "Microservices",
              "CI/CD",
              "Testing",
              "Agile",
              "Scrum",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 1.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="glass border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-all duration-300 px-4 py-2"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
