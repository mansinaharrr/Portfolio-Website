"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    const handleLinkHoverOn = () => setLinkHovered(true)
    const handleLinkHoverOff = () => setLinkHovered(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverOn)
      link.addEventListener("mouseleave", handleLinkHoverOff)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverOn)
        link.removeEventListener("mouseleave", handleLinkHoverOff)
      })
    }
  }, [])

  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <motion.div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-opacity duration-150 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-8 h-8 bg-white rounded-full" />
      </motion.div>

      <motion.div
        className={`fixed pointer-events-none z-40 rounded-full transition-opacity duration-150 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x - 80,
          top: position.y - 80,
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.02 }}
      >
        <div className="w-40 h-40 bg-white/5 backdrop-blur-sm rounded-full border border-white/10" />
      </motion.div>
    </>
  )
}
