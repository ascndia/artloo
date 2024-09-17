import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MoreVertical,
  ThumbsUp,
  Heart,
  Smile,
  Zap,
  Image as ImageIcon,
} from "lucide-react"; // For icons
import Image from "next/image"; // For high-quality images
import ExampleMenu from "./menu/ExampleMenu";

interface CardProps {
  username?: string;
  userImage?: string;
  contentImage?: string;
  reactions?: {
    likes: number;
    hearts: number;
    laughs: number;
    surprised: number;
    zaps: number;
  };
}

export function ImageCard({
  username = "HaiSenHI",
  userImage = "/avatar.png",
  contentImage = "/placeholder.png",
  reactions = {
    likes: 0,
    hearts: 0,
    laughs: 0,
    surprised: 0,
    zaps: 0,
  },
}: CardProps) {
  return (
    <div className="relative rounded-lg shadow-md overflow-hidden border">
      <div className="relative w-full min-h-96 h-full">
        <Image
          src={contentImage}
          alt={`${username}'s post`}
          className="object-cover w-full h-full"
          width={500} // Set appropriate width based on your design
          height={0} // Let height be determined by the image's aspect ratio
          priority
        />
      </div>

      <ExampleMenu />

      {/* User Info */}
      <div className="absolute bottom-0 w-full">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* Avatar */}
            <Avatar className="w-10 h-10">
              <AvatarImage src={userImage} alt={username} />
              <AvatarFallback>{username.charAt(0)}</AvatarFallback>
            </Avatar>

            {/* Username */}
            <span className="ml-3 text-white drop-shadow-md text-sm font-medium">
              {username}
            </span>
          </div>

          {/* Link Button */}
          {/* <Button variant="ghost" size="icon" className="z-20">
            <Link className="w-5 h-5" />
          </Button> */}
        </div>

        {/* Reactions */}
        <div className="px-4 text-white font-medium pb-4 flex justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4 text-yellow-500" />
              <span>{reactions.likes}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-red-500" />
              <span>{reactions.hearts}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Smile className="w-4 h-4 text-orange-500" />
              <span>{reactions.laughs}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4 text-purple-500" />
              <span>{reactions.zaps}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
