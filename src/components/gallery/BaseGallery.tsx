"use client";
import { Button } from "@/components/ui/button"; // shadcn Button component
import useBreakpoint from "@/hooks/useBreakpoint";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils"; // Utility to combine class names (if you have one set up)
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

interface GalleryProps {
  title: string;
  exploreLink?: string; // Optional
  exploreText?: string; // Optional
  children: ReactNode;
  headingLevel?: keyof JSX.IntrinsicElements; // Custom heading level (h1, h2, etc.)
  className?: string; // Optional className for outer div
}

export function BaseGallery({
  title,
  exploreLink,
  exploreText = "Explore All", // Default text for button
  children,
  headingLevel: Heading = "h2", // Default to h2
  className = "",
}: GalleryProps) {
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
      <div className="grid grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}
