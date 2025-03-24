"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Typewriter from "@/components/typewriter"
import TechStack from "@/components/tech-stack"
import DiscordStatus from "@/components/discord-status"

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="text-purple-light">Rest</span>
            </h1>
            <div className="text-xl md:text-3xl font-medium text-muted-foreground mb-8 h-12">
              <Typewriter text="Frontend Developer & Backend Enthusiast" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-purple-DEFAULT hover:bg-purple-dark">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            onClick={scrollToProjects}
          >
            <ChevronDown className="h-8 w-8 text-purple-light" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-light mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Frontend developer with growing backend skills, passionate about creating clean, user-friendly interfaces
              and expanding my knowledge in full-stack development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">My Skills</h3>
              <p className="text-muted-foreground mb-6">
                I specialize in frontend technologies while continuously expanding my backend knowledge. My tech stack
                includes:
              </p>
              <TechStack />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                My coding journey began in 2018, experimenting with scripts and tools. Over time, I developed a passion
                for creating my own solutions, which led me to teach myself frontend development.
              </p>
              <p className="text-muted-foreground mb-4">
                Now, I'm expanding into backend development to become a more versatile developer.
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">My Discord Status</h4>
                <DiscordStatus />
              </div>
              <Button asChild className="mt-4 bg-purple-DEFAULT hover:bg-purple-dark">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-purple-light mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Check out some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="project-card rounded-lg overflow-hidden bg-card border border-border h-full flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image src="https://alo.ne/file/jmj5wi" alt="RoseReverse" fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-semibold">
                    Under Construction
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">RoseReverse</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Secure malware decompilation and analysis platform. Currently under construction as we are adding
                  updates.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-dark/20 text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-purple-dark/20 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-purple-dark/20 text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://rosereverse.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-purple-light hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> Visit Site
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="project-card rounded-lg overflow-hidden bg-card border border-border h-full flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image src="https://alo.ne/file/wh3ydo" alt="RoseInsights" fill className="object-cover" />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">RoseInsights</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Free OSINT service with comprehensive features for intelligence gathering and analysis. Will always be
                  free without ever costing a dime.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-dark/20 text-xs px-2 py-1 rounded-full">OSINT</span>
                  <span className="bg-purple-dark/20 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-purple-dark/20 text-xs px-2 py-1 rounded-full">Node.js</span>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link href="#" className="inline-flex items-center gap-1 text-sm text-purple-light hover:underline">
                    <ExternalLink className="h-4 w-4" /> Coming Soon
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-purple-DEFAULT hover:bg-purple-dark">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-purple-dark/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
            <Button asChild size="lg" className="bg-purple-DEFAULT hover:bg-purple-dark">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

