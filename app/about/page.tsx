"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import TechStack from "@/components/tech-stack"

export default function AboutPage() {
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden border-4 border-purple-light shadow-xl">
              <Image src="https://alo.ne/file/l53fn9" alt="Rest" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-dark/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-dark/20 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Hi, I&apos;m Rest</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I&apos;m Rest (though most people know me by that name—my real name is Micah). Over the years,
                I&apos;ve developed a passion for web development, and today, I&apos;m proud to call myself a frontend
                developer with a growing interest in backend development.
              </p>
              <p>
                My journey into coding started back in 2018, when I was just experimenting with scripts and tools, often
                relying on others&apos; work without fully understanding it. Over time, I realized I wanted to create
                things myself, so I dedicated myself to learning and improving. I taught myself frontend development,
                focusing on building clean, user-friendly interfaces, and now I&apos;m diving into the world of backend
                development to expand my skill set.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild className="bg-purple-DEFAULT hover:bg-purple-dark">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg mb-12">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-bold">Business License Manager</h3>
                  <span className="text-purple-light font-medium">Current</span>
                </div>
                <p className="text-muted-foreground font-medium mb-2">Atlanta, Georgia</p>
                <p className="text-muted-foreground">
                  Currently working as a Business License Manager for Atlanta, Georgia, handling licensing requirements
                  and compliance for local businesses.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                  <span className="text-purple-light font-medium">2+ Years Experience</span>
                </div>
                <p className="text-muted-foreground mb-2">Proficient with Adobe Photoshop</p>
                <p className="text-muted-foreground">
                  Over 2 years of experience in graphic design, specializing in Adobe Photoshop. Created visual assets
                  for various projects and clients, developing a strong eye for design and attention to detail.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Technologies I Work With</h3>
            <TechStack />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">The Beginning (2018)</h3>
              <p className="text-muted-foreground">
                Started experimenting with scripts and tools, learning the basics of programming and how to use existing
                solutions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Learning Frontend (2020-2022)</h3>
              <p className="text-muted-foreground">
                Dedicated time to learning HTML, CSS, JavaScript, and React. Built my first websites and applications,
                focusing on user interface and experience.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Expanding to Backend (2022-2025)</h3>
              <p className="text-muted-foreground">
                Started learning Node.js, Express, and MongoDB to expand my skills into backend development. Working on
                full-stack projects to gain comprehensive experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

