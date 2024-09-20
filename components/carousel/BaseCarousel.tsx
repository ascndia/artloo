"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const images = [
  "/placeholder.png?height=400&width=300",
  "/placeholder.png?height=400&width=300",
  "/placeholder.png?height=400&width=300",
  "/placeholder.png?height=400&width=300",
  "/placeholder.png?height=400&width=300",
];

interface GalleryProps {
  title: string;
  exploreLink?: string; // Optional
  exploreText?: string; // Optional
  children: React.ReactNode;
  headingLevel?: keyof JSX.IntrinsicElements; // Custom heading level (h1, h2, etc.)
  className?: string; // Optional className for outer div
}

export function BaseCarousel({
  title,
  exploreLink,
  exploreText = "Explore All", // Default text for button
  children,
  headingLevel: Heading = "h2", // Default to h2
  className = "",
}: GalleryProps) {
  // return (
  //   <Carousel
  //     opts={{
  //       align: "center",
  //       loop: true,
  //       slidesToScroll: 3,
  //     }}
  //     className="w-full max-w-sm mx-auto"
  //   >
  //     <CarouselContent className="-ml-2 md:-ml-4">
  //       {images.map((src, index) => (
  //         <CarouselItem
  //           key={index}
  //           className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4"
  //         >
  //           <div className="p-1">
  //             <Card>
  //               <CardContent className="flex aspect-[3/4] items-center justify-center p-6">
  //                 <img
  //                   src={src}
  //                   alt={`Slide ${index + 1}`}
  //                   className="w-full h-full object-cover rounded-md"
  //                 />
  //               </CardContent>
  //             </Card>
  //           </div>
  //         </CarouselItem>
  //       ))}
  //     </CarouselContent>
  //     <CarouselPrevious />
  //     <CarouselNext />
  //   </Carousel>
  // );

  const isMobile = useIsMobile();
  return (
    <section className={cn("py-8 @container", className)}>
      <div className="flex justify-between items-center mb-6">
        <Heading
          className={cn(
            "text-3xl font-bold tracking-tight",
            isMobile && "!text-2xl"
          )}
        >
          {title}
        </Heading>
        {exploreLink && (
          <Button size={isMobile ? "sm" : "default"} asChild className="">
            <a
              href={exploreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              {exploreText}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
      <Carousel className="">{children}</Carousel>
    </section>
  );
}
