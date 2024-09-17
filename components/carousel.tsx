'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
]

export function Carousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((src, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[3/4] items-center justify-center p-6">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}