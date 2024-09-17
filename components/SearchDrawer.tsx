"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import { useSearchDrawer } from "@/state/search-drawer";
import useBreakpoint from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";
import { useNotificationStore } from "@/state/notification";

export function MobileSearchDrawer() {
  const { isOpen, setIsOpen } = useSearchDrawer();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const [category, setCategory] = useState("Models");
  const { containerRef } = useNotificationStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    {
      title: "Gaming Consoles",
      image: "/placeholder.png",
    },
    {
      title: "Smartwatches",
      image: "/placeholder.png",
    },
    {
      title: "Tablets",
      image: "/placeholder.png",
    },
    {
      title: "Speakers",
      image: "/placeholder.png",
    },
    {
      title: "Fitness Trackers",
      image: "/placeholder.png",
    },
  ]);

  const filteredSuggestions = useMemo(() => {
    return suggestions.filter((suggestion) =>
      suggestion.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, suggestions]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSuggestionClick = (suggestion: any) => {
    setSearchQuery(suggestion.title);
  };

  const isBreakpoint = useBreakpoint();
  useEffect(() => {
    if (!isBreakpoint) {
      setIsOpen(false);
    }
  }, [isBreakpoint]);
  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Overlay className="bg-transparent" />
      <Drawer.Portal container={containerRef?.current} />
      <Drawer.Content className="h-full bg-background fixed z-50 w-full p-4">
        <form className="flex w-full items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-9 px-2 lg:px-3 rounded-r-none"
              >
                {category}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setCategory("Models")}>
                Models
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("Images")}>
                Images
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("Articles")}>
                Articles
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("Users")}>
                Users
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("Collections")}>
                Collections
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategory("Bounties")}>
                Bounties
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex-1 w-full">
            {/* <Search2 /> */}
            <div className="w-full relative">
              <div className="relative">
                <Input
                  className="rounded-none border-x-0"
                  ref={inputRef}
                  type="search"
                  placeholder={`Search ${category}...`}
                  value={searchQuery}
                  onChange={handleChange}
                  onBlur={() => setSearchQuery("")}
                />
                {/* <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" /> */}
              </div>
              {filteredSuggestions.length > 0 &&
                searchQuery &&
                inputRef.current && (
                  <div className="mt-2 w-full absolute rounded-md border bg-background">
                    <ul className="max-h-[500px] overflow-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="cursor-pointer p-2 hover:bg-muted"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <div className="flex gap-4">
                            <img
                              src="/placeholder.png"
                              alt={suggestion.title}
                              width={64}
                              height={64}
                              className="rounded-md"
                              style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                              }}
                            />
                            <div>{suggestion.title}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
          <Button
            variant="outline"
            type="submit"
            size="sm"
            className="h-9 rounded-l-none"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </Drawer.Content>
    </Drawer.Root>
  );
}

{
  /* <form onSubmit={handleSearch} className="px-4">
          <div className="space-y-2">
            <Label htmlFor="search" className="text-left">
              Search Query
            </Label>
            <Input
              id="search"
              placeholder="Enter your search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="pt-2">
            <Drawer.Close asChild>
              <Button type="submit">Search</Button>
            </Drawer.Close>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </div>
        </form> */
}
