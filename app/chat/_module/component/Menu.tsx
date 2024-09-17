import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellOff, Ellipsis, Search, TrashIcon } from "lucide-react";

export default function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="absolute top-2 right-2 rounded-full p-1 hover:bg-muted">
          <Ellipsis className="h-5 w-5 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem>
          <span className="flex w-full items-center justify-between space-x-2 px-2 py-1">
            <span>Search</span>
            <Search className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex w-full items-center justify-between space-x-2 px-2 py-1">
            <span>Mute</span>
            <BellOff className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex w-full items-center justify-between space-x-2 px-2 py-1">
            <span>Delete</span>
            <TrashIcon className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
