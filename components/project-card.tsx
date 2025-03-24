"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  github?: string
  tags: string[]
  status?: "completed" | "in-progress" | "under-construction"
}

const ProjectCard = ({ title, description, image, link, github, tags, status = "completed" }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="project-card rounded-lg overflow-hidden bg-card border border-border h-full flex flex-col"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {status === "under-construction" && (
          <div className="absolute top-2 right-2">
            <Badge variant="destructive" className="font-semibold">
              Under Construction
            </Badge>
          </div>
        )}
        {status === "in-progress" && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="font-semibold">
              In Progress
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-purple-dark/20">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-purple-light hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> Visit Site
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-purple-light hover:underline"
            >
              <Github className="h-4 w-4" /> View Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

