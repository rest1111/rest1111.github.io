"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
}

const techStack: TechItem[] = [
  { name: "JavaScript", icon: "https://alo.ne/file/ly9363" },
  { name: "React", icon: "https://alo.ne/file/yk55h4" },
  { name: "Next.js", icon: "https://alo.ne/file/lz1h01" },
  { name: "Tailwind CSS", icon: "https://alo.ne/file/7yy4pa" },
  { name: "Node.js", icon: "https://alo.ne/file/hb1pzx" },
  { name: "MongoDB", icon: "https://alo.ne/file/kk3oth" },
  { name: "TypeScript", icon: "https://alo.ne/file/u9znen" },
  { name: "HTML5", icon: "https://alo.ne/file/jl1fr9" },
  { name: "CSS3", icon: "https://alo.ne/file/mqeamr" },
]

const TechStack = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="tech-icon flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 relative mb-2">
            <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
          </div>
          <span className="text-sm text-center">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default TechStack

