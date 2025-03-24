import Link from "next/link"
import { Mail, Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-purple-light">
              Rest
            </Link>
            <p className="text-muted-foreground mt-2">Frontend Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="mailto:rest@alo.ne"
              className="text-muted-foreground hover:text-purple-light transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rest1111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-light transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Rest. All rights reserved.</p>
          <p className="mt-1">
            Contact:{" "}
            <a href="mailto:rest@alo.ne" className="text-purple-light hover:underline">
              rest@alo.ne
            </a>{" "}
            | Discord: restidk
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

