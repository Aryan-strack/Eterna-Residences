"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Floor Plans", href: "#floor-plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "RERA Details", href: "#" },
    { name: "Disclaimer", href: "#" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-[var(--font-playfair)] mb-4">Luxury Residences</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Building homes, creating futures. Experience premium living with world-class amenities and modern
              architecture in the heart of the city.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
                  <p className="text-primary-foreground/80">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">info@luxuryresidences.com</p>
                  <p className="text-primary-foreground/80">sales@luxuryresidences.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80">
                  123 Downtown District
                  <br />
                  Luxury Avenue, City 12345
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to get the latest updates on new launches and exclusive offers.
            </p>

            <div className="flex space-x-2">
              <Input
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button size="sm" className="bg-accent hover:bg-accent/90 flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">© 2024 Luxury Residences. All rights reserved.</div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
