"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Shield, Leaf } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Prime Location",
      description: "Easy access to schools, hospitals, and shopping centers",
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Modern Architecture",
      description: "Spacious layouts with elegant interiors and contemporary design",
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "24/7 Security",
      description: "Gated community with advanced surveillance systems",
    },
    {
      icon: <Leaf className="h-6 w-6 text-accent" />,
      title: "Eco-Friendly",
      description: "Sustainable living with green building practices",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
              Welcome to Luxury Residences
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of the city, Luxury Residences is a premium residential community offering
              world-class living. With modern architecture, eco-friendly design, and a range of luxurious amenities,
              it's more than just a home – it's a lifestyle.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence is reflected in every detail, from the carefully curated interiors to the
              thoughtfully designed common spaces that foster community and connection.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 animate-fade-in-up animate-delay-${(index + 1) * 200}`}
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <Card className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <img src="/luxury-apartment-interior.png" alt="Luxury Interior" className="w-full h-[600px] object-cover" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
