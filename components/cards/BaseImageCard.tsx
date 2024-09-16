import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVertical, Link, ThumbsUp, Heart, Smile, Zap } from "lucide-react"; // For icons
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

export function BaseImageCard({
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

      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute !bg-transparent rounded-full !text-white top-2 right-2 z-20"
      >
        <MoreVertical className="w-8 h-8" />
      </Button> */}
      <ExampleMenu />
    </div>
  );
}
