"use client"

import { useState } from "react"
import Image from "next/image"
import { X, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      title: "Tokyo Skyline",
      location: "Tokyo, Japan",
      date: "March 2022",
      description: "The breathtaking view of Tokyo from the Tokyo Skytree at sunset.",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=400",
      title: "Cherry Blossoms",
      location: "Kyoto, Japan",
      date: "April 2022",
      description: "Beautiful cherry blossoms in full bloom at Maruyama Park.",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "Northern Lights",
      location: "Reykjavik, Iceland",
      date: "November 2022",
      description: "The magical aurora borealis dancing across the Icelandic sky.",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=400",
      title: "Santorini Sunset",
      location: "Santorini, Greece",
      date: "June 2023",
      description: "The famous blue domes of Santorini against the golden sunset.",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Machu Picchu",
      location: "Cusco, Peru",
      date: "August 2023",
      description: "The ancient Incan citadel shrouded in morning mist.",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=400",
      title: "Swiss Alps",
      location: "Zermatt, Switzerland",
      date: "December 2023",
      description: "The majestic Matterhorn peak covered in fresh snow.",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Bali Rice Terraces",
      location: "Ubud, Bali",
      date: "February 2024",
      description: "The stunning Tegallalang rice terraces in the morning light.",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=400",
      title: "New York City",
      location: "New York, USA",
      date: "May 2024",
      description: "The iconic Manhattan skyline from Brooklyn Bridge Park.",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Sahara Desert",
      location: "Merzouga, Morocco",
      date: "September 2024",
      description: "Golden sand dunes stretching endlessly under the desert sun.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of moments captured during my travels around the world. Each photo tells a story of adventure,
            culture, and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4" />
                  {photo.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {photo.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="relative">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {selectedImage.location}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedImage.date}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
