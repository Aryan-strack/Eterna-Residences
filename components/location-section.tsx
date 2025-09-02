"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Car, Train, Plane, GraduationCap, Hospital, ShoppingBag } from "lucide-react"

export default function LocationSection() {
  const nearbyPlaces = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      name: "International School",
      distance: "0.5 km",
      time: "2 min drive",
    },
    {
      icon: <Hospital className="h-5 w-5" />,
      name: "City General Hospital",
      distance: "1.2 km",
      time: "5 min drive",
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      name: "Grand Mall",
      distance: "2.0 km",
      time: "8 min drive",
    },
    {
      icon: <Train className="h-5 w-5" />,
      name: "Metro Station",
      distance: "0.8 km",
      time: "3 min drive",
    },
    {
      icon: <Plane className="h-5 w-5" />,
      name: "International Airport",
      distance: "15 km",
      time: "25 min drive",
    },
    {
      icon: <Car className="h-5 w-5" />,
      name: "Business District",
      distance: "3.5 km",
      time: "12 min drive",
    },
  ]

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
            Perfectly Positioned in the City
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located just minutes from key landmarks, Luxury Residences offers easy connectivity to schools, hospitals,
            business hubs, and entertainment zones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="animate-slide-in-left">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img src="/luxury-residential-map.png" alt="Location Map" className="w-full h-96 object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h3 className="font-semibold text-primary">Luxury Residences</h3>
                      <p className="text-sm text-muted-foreground">Downtown District</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nearby Places */}
          <div className="animate-slide-in-right">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-[var(--font-playfair)] text-primary">What's Nearby</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyPlaces.map((place, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in-up animate-delay-${index * 100}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-accent">{place.icon}</div>
                        <div>
                          <h4 className="font-medium text-primary">{place.name}</h4>
                          <p className="text-sm text-muted-foreground">{place.distance}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {place.time}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connectivity Highlights */}
                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-4">Connectivity Highlights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Direct access to major highways and expressways
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Walking distance to metro and bus stations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Close proximity to IT parks and business centers
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Easy access to recreational and cultural venues
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
