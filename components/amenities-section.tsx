"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Waves, Dumbbell, Trees, Car, Shield, Wifi, Users, Gamepad2, Coffee, Baby, Zap, Wind } from "lucide-react"

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Swimming Pool",
      description: "Olympic-size pool with separate kids area",
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Fitness Center",
      description: "State-of-the-art gym with personal trainers",
    },
    {
      icon: <Trees className="h-8 w-8" />,
      title: "Landscaped Gardens",
      description: "Beautiful green spaces and walking trails",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Smart Parking",
      description: "Automated parking system with EV charging",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Security",
      description: "Advanced surveillance and security personnel",
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "High-Speed Internet",
      description: "Fiber optic connectivity throughout",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Hall",
      description: "Event space for gatherings and celebrations",
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Room",
      description: "Entertainment area with billiards and games",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Café & Lounge",
      description: "On-site café with co-working spaces",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Kids Play Area",
      description: "Safe and fun playground for children",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Power Backup",
      description: "Uninterrupted power supply with generators",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Central AC",
      description: "Climate-controlled common areas",
    },
  ]

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
            Enjoy a Luxurious Lifestyle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience world-class amenities designed to enhance your daily life and create lasting memories with family
            and friends.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className={`group hover-lift text-center animate-scale-in animate-delay-${(index % 4) * 100}`}
            >
              <CardContent className="p-6">
                <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Image */}
        <div className="mt-16 animate-fade-in-up animate-delay-600">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img src="/luxury-community-amenities.png" alt="Community Amenities" className="w-full h-96 object-cover" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
