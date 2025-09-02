"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/professional-woman-headshot.png",
      rating: 5,
      text: "Investing in Luxury Residences was the best decision we made. The team was supportive throughout, and the property exceeded our expectations. The amenities are world-class!",
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      image: "/professional-man-headshot.png",
      rating: 5,
      text: "The location is perfect and the build quality is exceptional. My family loves the community feel and the kids enjoy the playground. Highly recommend to anyone looking for luxury living.",
    },
    {
      name: "Emily Rodriguez",
      role: "Young Professional",
      image: "/young-professional-woman-headshot.png",
      rating: 5,
      text: "As a first-time buyer, the team made the process seamless. The modern amenities and prime location make it perfect for my lifestyle. The fitness center and pool are amazing!",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
            Trusted by Hundreds of Families
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied residents have to say about their experience with
            Luxury Residences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`hover-lift animate-scale-in animate-delay-${index * 200}`}>
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="text-accent mb-4">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animate-delay-600">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-accent mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
