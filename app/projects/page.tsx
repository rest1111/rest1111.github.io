"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

type ProjectCategory = "all" | "frontend" | "fullstack" | "tools"

interface Project {
  id: number
  title: string
  description: string
  image: string
  link?: string
  github?: string
  tags: string[]
  category: ProjectCategory[]
  status?: "completed" | "in-progress" | "under-construction"
}

const projects: Project[] = [
  {
    id: 1,
    title: "RoseReverse",
    description:
      "Secure malware decompilation and analysis platform. Currently under construction as we are adding updates.",
    image: "https://alo.ne/file/jmj5wi",
    link: "https://rosereverse.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Security"],
    category: ["fullstack", "tools"],
    status: "under-construction",
  },
  {
    id: 2,
    title: "RoseInsights",
    description:
      "Free OSINT service with comprehensive features for intelligence gathering and analysis. Will always be free without ever costing a dime.",
    image: "https://alo.ne/file/wh3ydo",
    tags: ["OSINT", "React", "Node.js", "API Integration"],
    category: ["fullstack", "tools"],
    status: "in-progress",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-purple-DEFAULT hover:bg-purple-dark" : ""}
          >
            All Projects
          </Button>
          <Button
            variant={activeCategory === "fullstack" ? "default" : "outline"}
            onClick={() => setActiveCategory("fullstack")}
            className={activeCategory === "fullstack" ? "bg-purple-DEFAULT hover:bg-purple-dark" : ""}
          >
            Full Stack
          </Button>
          <Button
            variant={activeCategory === "tools" ? "default" : "outline"}
            onClick={() => setActiveCategory("tools")}
            className={activeCategory === "tools" ? "bg-purple-DEFAULT hover:bg-purple-dark" : ""}
          >
            Tools
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                github={project.github}
                tags={project.tags}
                status={project.status}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

