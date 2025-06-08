"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState("All")

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

  const projects = [
    {
      title: "Pet Adoption and Rescue System",
      description:
        "A modern pet adoption platform designed to enhance user experience, featuring streamlined rescue workflows, detailed pet profiles, and an efficient adoption application process.",
      image: "/pet-adoption-screenshot.png",
      tags: ["MySQL", "React.js", "Node.js", "TypeScript", "TailWind CSS"],
      github: "https://github.com/mansinaharrr/Pet-Adoption-and-Rescue-System.git",
      live: "https://pet-adoption-and-rescue-system.vercel.app/",
      category: "Design",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark mode, and modern design principles.",
      image: "/portfolio-website.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive"],
      github: "https://github.com/mansinaharrr/Portfolio-Website.git",
      live: "https://portfolio-website-eight-sigma-74.vercel.app/",
      category: "Web",
      featured: true,
    },
    {
      title: "Task Management Dashboard",
      description:
        "A sleek task management application with drag-and-drop functionality, real-time updates, and intuitive user interface.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "DnD", "Firebase"],
      github: "#",
      live: "#",
      category: "Web",
      featured: false,
    },
    {
      title: "Weather App Design",
      description:
        "A weather application design featuring clean interfaces, intuitive data visualization, and location-based services.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Figma", "UI/UX", "Prototyping", "Data Visualization", "Mobile"],
      github: "#",
      live: "#",
      category: "Design",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media dashboard with analytics, content management, and engagement tracking features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Chart.js", "Tailwind CSS", "API Integration", "Responsive"],
      github: "#",
      live: "#",
      category: "Web",
      featured: true,
    },
    {
      title: "Travel App UI Design",
      description:
        "A travel application design focusing on user experience, featuring trip planning, booking, and itinerary management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Figma", "UI/UX", "Prototyping", "User Research", "Mobile"],
      github: "#",
      live: "#",
      category: "Design",
      featured: false,
    },
  ]

  const filters = ["All", "Design", "Web"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
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
            <Folder className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">Featured Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning design, development, and IoT innovations with real-world impact.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-3 justify-center glass rounded-full p-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="glass border-white/20 overflow-hidden group h-full">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 bg-black/50 backdrop-blur-sm text-white hover:bg-white/20"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-white/10 text-slate-300 border border-white/10 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8"
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
