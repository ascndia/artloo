"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HomeIcon,
  Layers3Icon,
  ImageIcon,
  VideoIcon,
  FileTextIcon,
  CalendarIcon,
  ShoppingBagIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { Container } from "./Container";
import { useNotificationStore } from "@/state/notification";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function SubHeaderComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // Use ref to store last scroll position

  const { containerRef } = useNotificationStore(); // Assuming containerRef is where your scrollable element is stored

  const controlNavbar = () => {
    if (containerRef?.current) {
      const currentScrollY = containerRef.current.scrollTop;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    }
  };

  useEffect(() => {
    const container = containerRef?.current;

    if (container) {
      container.addEventListener("scroll", controlNavbar);

      // Cleanup event listener on unmount
      return () => {
        container.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [containerRef]);

  return (
    <nav
      className={`sticky top-0 z-40 w-full bg-background transition duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <Container className="border-b" size="full">
        <ScrollArea
          dir="ltr"
          className="container whitespace-nowrap flex py-1.5 items-center gap-4 "
        >
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <HomeIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link
              href="/models"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <Layers3Icon className="h-5 w-5" />
              <span className="text-sm font-medium">Models</span>
            </Link>
            <Link
              href="/images"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <ImageIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Images</span>
            </Link>
            <Link
              href="/videos"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <VideoIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Videos</span>
            </Link>
            <Link
              href="/articles"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <FileTextIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Articles</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <MoreHorizontalIcon className="h-5 w-5" />
                  <span className="ml-2 text-sm font-medium">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Container>
    </nav>
  );
}
