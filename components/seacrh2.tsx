/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FEPfR8QfA6k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Seach2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    // {
    //   title: "Laptops",
    //   image: "/placeholder.png",
    // },
    // {
    //   title: "Smartphones",
    //   image: "/placeholder.png",
    // },
    // {
    //   title: "Headphones",
    //   image: "/placeholder.png",
    // },
    // {
    //   title: "Televisions",
    //   image: "/placeholder.png",
    // },
    // {
    //   title: "Cameras",
    //   image: "/placeholder.png",
    // },
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

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleSuggestionClick = (suggestion: any) => {
    setSearchQuery(suggestion.title);
  };
  return (
    <div className="w-full relative">
      <div className="relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          onBlur={() => setSearchQuery("")}
        />
        {/* <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" /> */}
      </div>
      {filteredSuggestions.length > 0 && searchQuery && inputRef.current && (
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
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div>{suggestion.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
