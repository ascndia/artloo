import React, { useMemo, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const SearchHeader = () => {
  const [category, setCategory] = React.useState("Models");

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleSuggestionClick = (suggestion: {
    title: string;
    image: string;
  }) => {
    setSearchQuery(suggestion.title);
  };

  return (
    <form className="flex w-full items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-9 px-2 lg:px-3 rounded-r-none">
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
              onChange={handleSearch}
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
      </div>
      <Button
        variant="outline"
        type="submit"
        size="sm"
        className="h-9 rounded-l-none"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
};

export default SearchHeader;
