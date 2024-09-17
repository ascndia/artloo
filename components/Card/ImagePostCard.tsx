/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yJnm9aLu8QB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  PlusIcon,
  MoveVerticalIcon,
  SmileIcon,
  FlameIcon,
  ShareIcon,
} from "lucide-react";

export default function ImagePostCard() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="flex items-center justify-between space-x-4 p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">HaiSenHI</span>
            <span className="text-sm text-muted-foreground">
              4 months ago - Cross-post
            </span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <MoveVerticalIcon className="w-5 h-5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          <div className="carousel">
            <img
              src="/placeholder.svg"
              alt="Art Image 1"
              className="w-full h-auto"
              width="300"
              height="400"
              style={{ aspectRatio: "300/400", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              alt="Art Image 2"
              className="w-full h-auto"
              width="300"
              height="400"
              style={{ aspectRatio: "300/400", objectFit: "cover" }}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <PlusIcon className="w-5 h-5 text-muted-foreground" />
          </Button>
          <span className="text-sm">23</span>
          <Button variant="ghost" size="icon">
            <HeartIcon className="w-5 h-5 text-red-500" />
          </Button>
          <span className="text-sm">15</span>
          <Button variant="ghost" size="icon">
            <SmileIcon className="w-5 h-5 text-yellow-500" />
          </Button>
          <span className="text-sm">1</span>
          <Button variant="ghost" size="icon">
            <FlameIcon className="w-5 h-5 text-orange-500" />
          </Button>
          <span className="text-sm">0</span>
        </div>
        <Button variant="ghost" size="icon">
          <ShareIcon className="w-5 h-5 text-muted-foreground" />
        </Button>
      </CardFooter>
    </Card>
  );
}
