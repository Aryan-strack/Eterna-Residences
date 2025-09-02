import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import FloorPlansSection from "@/components/floor-plans-section"
import AmenitiesSection from "@/components/amenities-section"
import LocationSection from "@/components/location-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FloorPlansSection />
      <AmenitiesSection />
      <LocationSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
