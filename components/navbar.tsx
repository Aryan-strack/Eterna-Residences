"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "Floor Plan", href: "#floor-plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={`fixed bg-white top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-xl"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Image
              src="/logoER.png"
              alt="Eterna Residences Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h1 className="text-2xl font-[var(--font-playfair)] text-accent transition-colors duration-300 cursor-pointer">
              Eterna <br />
              Residences
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="relative text-foreground cursor-pointer hover:text-accent transition-all duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 animate-pulse" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button className="bg-accent cursor-pointer hover:bg-accent/90 shadow-md hover:shadow-lg">
              Book Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-accent transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone className="h-4 w-4 animate-pulse" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <Button className="bg-accent hover:bg-accent/90 w-full cursor-pointer shadow-md hover:shadow-lg">
                  Book Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
