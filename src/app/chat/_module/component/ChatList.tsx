"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Check } from "lucide-react";
import { usePageStore } from "../state/page";
import useIsMobile from "@/hooks/useIsMobile";

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
  unread?: number;
  sent?: boolean;
  received?: boolean;
}

const chatItems: ChatItem[] = [
  {
    id: "1",
    name: "Design chat",
    avatar: "DC",
    message: "Jessie Rollins sent...",
    time: "4m",
    unread: 1,
  },
  {
    id: "2",
    name: "Osman Campos",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "You: Hey! We are read...",
    time: "20m",
    sent: true,
  },
  {
    id: "3",
    name: "Jayden Church",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "I prepared some varia...",
    time: "1h",
  },
  {
    id: "4",
    name: "Jacob Mcleod",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "And send me the proto...",
    time: "10m",
    unread: 3,
  },
  {
    id: "5",
    name: "Jasmin Lowery",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "You: Ok! Let's discuss it on th...",
    time: "20m",
    received: true,
  },
  {
    id: "6",
    name: "Zaid Myers",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "You: Hey! We are ready to in...",
    time: "45m",
    sent: true,
  },
  {
    id: "6",
    name: "Zaid Myers",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "You: Hey! We are ready to in...",
    time: "45m",
    sent: true,
  },
  {
    id: "6",
    name: "Zaid Myers",
    avatar: "/placeholder.svg?height=32&width=32",
    message: "You: Hey! We are ready to in...",
    time: "45m",
    sent: true,
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const getAvatarColor = (name: string) => {
  const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  const index = name.length % colors.length;
  return colors[index];
};

export function ChatList() {
  const { setLeftSidebarOpen } = usePageStore();
  const isMobile = useIsMobile();
  const handleClick = () => {
    if (isMobile) {
      setLeftSidebarOpen(false);
    }
  };
  return (
    <ScrollArea className="w-auto p-2 overflow-y-auto flex-grow rounded-md border">
      <div className="flex flex-col gap-2">
        {chatItems.map((item) => (
          <div
            onClick={handleClick}
            key={item.id}
            className="flex cursor-pointer items-center space-x-4 rounded-lg p-2 transition-colors hover:bg-muted/50"
          >
            <Avatar
              className={
                item.avatar === item.name ? getAvatarColor(item.name) : ""
              }
            >
              <AvatarImage
                src={`/avatar.png?height=32&width=32&name=${item.name}`}
                alt={item.name}
              />
              <AvatarFallback>{getInitials(item.name)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center">
                <p className="text-sm font-medium leading-none">{item.name}</p>
                <p className="ml-auto text-xs text-muted-foreground">
                  {item.time}
                </p>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {item.message}
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              {item.unread && (
                <Badge variant="destructive">{item.unread}</Badge>
              )}
              {item.sent && (
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              )}
              {item.received && (
                <Check className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
