"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Maximize } from "lucide-react"

export default function GallerySection() {
  const galleryImages = [
    {
      src: "/luxury-glass-building.png",
      title: "Exterior View",
      category: "Architecture",
    },
    {
      src: "/luxury-living-room.png",
      title: "Living Room",
      category: "Interior",
    },
    {
      src: "/luxury-pool-palms.png",
      title: "Swimming Pool",
      category: "Amenities",
    },
    {
      src: "/modern-luxury-kitchen.png",
      title: "Gourmet Kitchen",
      category: "Interior",
    },
    {
      src: "/luxury-fitness-center.png",
      title: "Fitness Center",
      category: "Amenities",
    },
    {
      src: "/landscaped-garden.png",
      title: "Landscaped Gardens",
      category: "Outdoor",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
            Take a Closer Look
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our stunning architecture, elegant interiors, and world-class amenities through our carefully
            curated gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift cursor-pointer animate-scale-in animate-delay-${(index % 3) * 200}`}
            >
              <CardContent className="p-0 relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
          <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
            <Maximize className="h-5 w-5 mr-2" />
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
