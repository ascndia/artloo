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
import useBreakpoint from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BgAnimateButton } from "./ui/animated-button";

function Action() {
  const { toggleSidebar } = useSidebarStore();
  const isBreakpoint = useBreakpoint();
  return (
    <div className="flex items-center">
      <Button
        type="button"
        onClick={toggleSidebar}
        variant="outline"
        className={"rounded-r-none"}
      >
        <Paintbrush className="h-4 w-4" />
        <span className={cn("ml-2", isBreakpoint && "hidden")}>
          Generate Images
        </span>
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
          <DropdownMenuItem className="" asChild>
            <Link href="/generate">
              <BgAnimateButton
                rounded="sm"
                gradient="sunset"
                animation="spin-fast"
              >
                Open Workflow
              </BgAnimateButton>
            </Link>
          </DropdownMenuItem>
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
