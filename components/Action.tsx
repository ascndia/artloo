import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useSidebarStore } from "@/state/generate-sidebar";
import { Brush, BrushIcon, Paintbrush, Palette, Stars } from "lucide-react";

function Action() {
  const { toggleSidebar } = useSidebarStore();
  return (
    <div className="flex items-center">
      <Button
        type="button"
        onClick={toggleSidebar}
        variant="outline"
        className={"rounded-r-none"}
      >
        <Paintbrush className="h-4 w-4" />
        <span className="ml-2 md:block hidden">Generate Images</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={"rounded-l-none border-l-0 px-2"}
          >
            <CaretDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Post images</DropdownMenuItem>
          <DropdownMenuItem>Post videos</DropdownMenuItem>
          <DropdownMenuItem>Upload a model</DropdownMenuItem>
          <DropdownMenuItem>Train a LoRA</DropdownMenuItem>
          <DropdownMenuItem>Write an article</DropdownMenuItem>
          <DropdownMenuItem>Create a bounty</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Action;

// <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <Button variant="outline">
//       <span className="mr-2">Create</span>
//       <ChevronDownIcon />
//     </Button>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuItem>Generate images</DropdownMenuItem>
//     <DropdownMenuItem>Post images</DropdownMenuItem>
//     <DropdownMenuItem>Post videos</DropdownMenuItem>
//     <DropdownMenuItem>Upload a model</DropdownMenuItem>
//     <DropdownMenuItem>Train a LoRA</DropdownMenuItem>
//     <DropdownMenuItem>Write an article</DropdownMenuItem>
//     <DropdownMenuItem>Create a bounty</DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
