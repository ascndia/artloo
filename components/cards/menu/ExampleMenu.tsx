/**
 * v0 by Vercel.
 * @see https://v0.dev/t/92uZQ3JWWe6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bookmark,
  Eye,
  EyeOff,
  Flag,
  Image,
  MoreVertical,
  Settings,
  Share,
  Slash,
  UploadIcon,
  UserRoundX,
} from "lucide-react";
import { useSaveToCollection } from "@/state/save-to-collection";

export default function ExampleMenu() {
  const { openDialog } = useSaveToCollection();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute !border-none !bg-transparent rounded-full !text-white top-2 right-2 z-20"
        >
          <MoreVertical className="w-6 h-6" />
          <span className="sr-only">Toggle post menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56">
        <DropdownMenuItem>
          <div
            onClick={() => openDialog(null)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Bookmark className="h-4 w-4" />
            <span>Save to collection</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Eye className="h-4 w-4" />
            <span>View post</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Share className="h-4 w-4" />
            <span>Share post</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <EyeOff className="h-4 w-4" />
            <span>Hide this post</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <UserRoundX className="h-4 w-4" />
            <span>Hide content from this user</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Flag className="h-4 w-4" />
            <span>Report post</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Settings className="h-4 w-4" />
            <span>Art posting settings</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
