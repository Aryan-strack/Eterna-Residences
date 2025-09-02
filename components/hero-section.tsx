"use client"

import { Button } from "@/components/ui/button"
import { Play, MapPin, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative h-full flex items-center justify-center overflow-hidden pb-20 pt-20 md:pt-32">
      {/* Background Image with Enhanced Parallax Effect */}
      <div
        className="absolute inset-0 parallax transform transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/luxury-modern-residence.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: "translateZ(-10px) scale(1.1)",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Floating geometric shapes for 3D effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float transform rotate-45"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-lg animate-float-reverse transform rotate-12"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-lg animate-float-reverse transform rotate-45"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content with enhanced 3D animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up transform" style={{ transformStyle: "preserve-3d" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mt-6 font-bold font-[var(--font-playfair)] mb-6 leading-tight transform transition-all duration-1000 hover:scale-105 hover:translateZ-4">
            Discover Your Dream Home at <span className="text-accent animate-glow">Luxury Residences</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200 transform hover:translateZ-2 transition-all duration-500">
            Modern living spaces designed for comfort, style, and convenience. Invest in your future today with premium
            amenities and prime location.
          </p>

          {/* Location Badge with 3D hover effect */}
          <div
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-fade-in-up animate-delay-400 transform transition-all duration-300 hover:scale-110 hover:translateZ-4 hover:rotateX-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <MapPin className="h-5 w-5 mr-2 text-accent animate-pulse" />
            <span className="text-lg font-medium">Prime Location - Downtown District</span>
          </div>

          {/* CTA Buttons with enhanced 3D effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-600">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-110 hover:translateZ-6 hover:rotateX-6 shadow-2xl hover:shadow-accent/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Calendar className="h-5 w-5 mr-2 animate-bounce" />
              <span className="transform transition-all duration-300 hover:translateZ-2">Book a Visit</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold bg-transparent transform transition-all duration-300 hover:scale-110 hover:translateZ-6 hover:rotateX-6 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Play className="h-5 w-5 mr-2 animate-pulse" />
              <span className="transform transition-all duration-300 hover:translateZ-2">Watch Virtual Tour</span>
            </Button>
          </div>

          {/* Stats with 3D card effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up animate-delay-800">
            {[
              { number: "200+", label: "Premium Units" },
              { number: "15+", label: "World-Class Amenities" },
              { number: "98%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-110 hover:translateZ-8 hover:rotateY-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                style={{
                  transformStyle: "preserve-3d",
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-accent mb-2 transform transition-all duration-300 hover:translateZ-4">
                  {stat.number}
                </div>
                <div className="text-lg text-white/80 transform transition-all duration-300 hover:translateZ-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with 3D animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center transform transition-all duration-300 hover:scale-125 hover:translateZ-4 hover:rotateX-12"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
