'use client'

import { ReactNode, useState, useEffect } from 'react'
import { Linkedin, Instagram, ArrowUp } from 'lucide-react'
import Header from './header'
import Footer from './footer'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
      
      {/* Floating Social Icons - Middle */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/netiquette-info-solutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:border-accent transition-all duration-300 group"
        >
          <Linkedin className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/netiquetteinfo/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:border-accent transition-all duration-300 group"
        >
          <Instagram className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
        </a>
      </div>

      {/* Scroll to Top Button - Bottom */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:border-accent transition-all duration-300 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
      </button>
    </div>
  )
}
