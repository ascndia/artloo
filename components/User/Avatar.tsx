import {
  Avatar as UIAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import React from "react";

export default function Avatar({
  userImage,
  username,
  size = "md",
}: {
  userImage: string;
  username: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <UIAvatar
      className={
        size === "sm"
          ? "h-6 w-6 text-xs"
          : size === "md"
          ? "h-8 w-8 text-sm"
          : "h-10 w-10 text-base"
      }
    >
      <AvatarImage src={userImage} alt={username} />
      <AvatarFallback>{username.charAt(0)}</AvatarFallback>
    </UIAvatar>
  );
}
