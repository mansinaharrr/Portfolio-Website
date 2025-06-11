"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  imageUrl: string
  description: string
  credentialUrl?: string
}

const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Introduction to Databases",
    issuer: "Coursera",
    date: "May 2025",
    imageUrl: "/coursera-certificate.png",
    description: "Understands fundamental database concepts, including relational models, SQL querying, normalization, and transaction processing.",
    credentialUrl: "/Coursera Introduction to Databases certificate.pdf",
  },
  {
    id: 2,
    title: "C++ Programming",
    issuer: "Udemy",
    date: "April 2024",
    imageUrl: "/udemy-certificate.jpg",
    description: "Foundational knowledge of C++ programming, including data types, functions, OOP, memory management, and STL.",
    credentialUrl: "/udemy c++ certificate.pdf",
  },
  // Add more certifications as needed
  {
    id: 3,
    title: "Graphic Design",
    issuer: "Image",
    date: "August 2021",
    imageUrl: "/image-gd-certificate.png",
    description: "Hands-on experience with visual design, branding, and layout using Adobe Photoshop, Illustrator, and InDesign.",
    credentialUrl: "/image certificate.pdf",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="certifications" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0118]/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-green-600 mb-6"
          >
            {/* You can choose an icon for certifications, e.g., <Award className="h-8 w-8 text-white" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-white"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17.76 21l-3.37-2-2.44 1.44L6.223 21l2.283-8.11L3 9l8.199-.57L12 1l.801 7.43L21 9z"/></svg>
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">Certifications</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-teal-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A testament to continuous learning and professional growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {certificationsData.map((certification) => (
            <motion.div
              key={certification.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={certification.imageUrl}
                  alt={certification.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{certification.title}</h3>
                <p className="text-slate-400 text-sm mb-1">{certification.issuer} - {certification.date}</p>
                <p className="text-slate-300 text-base leading-relaxed mb-4">{certification.description}</p>
                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 