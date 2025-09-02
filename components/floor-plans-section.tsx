"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Bed, Bath, Square, Download } from "lucide-react"

export default function FloorPlansSection() {
  const floorPlans = [
    {
      type: "2 BHK Apartment",
      price: "$180,000",
      area: "1,200 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      features: ["Spacious Living Room", "Modern Kitchen", "Balcony", "Storage"],
      image: "/2-bedroom-apartment-layout.png",
      popular: false,
    },
    {
      type: "3 BHK Apartment",
      price: "$250,000",
      area: "1,600 sq ft",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Master Suite", "Open Kitchen", "2 Balconies", "Walk-in Closet"],
      image: "/3-bedroom-apartment-layout.png",
      popular: true,
    },
    {
      type: "Luxury Villa",
      price: "$450,000",
      area: "2,800 sq ft",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Private Garden", "Garage", "Study Room", "Terrace"],
      image: "/luxury-villa-floor-plan.png",
      popular: false,
    },
  ]

  return (
    <section id="floor-plans" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
            Choose Your Perfect Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer flexible floor plans designed for different lifestyles. Explore our options and find the perfect
            space for your family.
          </p>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover-lift animate-scale-in animate-delay-${index * 200} ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-[var(--font-playfair)] text-primary mb-2">{plan.type}</CardTitle>
                <div className="text-3xl font-bold text-accent mb-4">{plan.price}</div>

                {/* Specs */}
                <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {plan.bedrooms} Bed
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {plan.bathrooms} Bath
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {plan.area}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Floor Plan Image */}
                <div className="mb-6">
                  <img
                    src={plan.image || "/placeholder.svg"}
                    alt={`${plan.type} Floor Plan`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Home className="h-4 w-4 mr-2" />
                    Schedule Visit
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
