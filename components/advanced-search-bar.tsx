"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import Search2 from "./seacrh2";

export function AdvancedSearchBarComponent() {
  const [category, setCategory] = React.useState("models");

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="models">Models</SelectItem>
          <SelectItem value="images">Images</SelectItem>
          <SelectItem value="articles">Articles</SelectItem>
          <SelectItem value="users">Users</SelectItem>
          <SelectItem value="collections">Collections</SelectItem>
          <SelectItem value="bounties">Bounties</SelectItem>
        </SelectContent>
      </Select>
      <div className="relative flex-grow">
        <Input
          type="search"
          placeholder={`Search ${category}`}
          className="pr-8"
        />
        <Search2 />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 h-full"
        >
          <SlidersHorizontalIcon className="h-4 w-4" />
        </Button>
      </div>
      <Button type="submit" size="icon">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
