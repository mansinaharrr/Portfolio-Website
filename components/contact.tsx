"use client"

import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0118]/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600/15 rounded-full filter blur-3xl animate-pulse-glow" />
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
            <MessageCircle className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">Let's Build Something!</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-16 justify-items-center">
          <motion.div variants={itemVariants} className="space-y-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Portfolio Looking Good? Let’s Chat.</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow creators. Whether you have a
                project in mind or just want to chat about design and technology, feel free to reach out!
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center space-x-20 space-y-0">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  content: "mansinahar2020@gmail.com",
                  color: "from-purple-600 to-pink-600",
                  description: "Drop me a line anytime",
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Phone",
                  content: "+91 72004 43602",
                  color: "from-blue-600 to-cyan-600",
                  description: "Let's have a conversation",
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Location",
                  content: "Chennai, Tamil Nadu, India",
                  color: "from-green-600 to-emerald-600",
                  description: "Available for local meetups",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-6 group text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-lg">{item.title}</div>
                    <div className="text-slate-300 group-hover:text-white transition-colors font-medium">
                      {item.content}
                    </div>
                    <div className="text-slate-500 text-sm mt-1">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4 justify-center">
                {[
                  { name: "GitHub", url: "https://github.com/mansinaharrr", color: "hover:text-purple-400" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/mansi-nahar-534035351/", color: "hover:text-blue-400" },
                  { name: "Instagram", url: "https://www.instagram.com/_mansinahar/", color: "hover:text-pink-400" },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
