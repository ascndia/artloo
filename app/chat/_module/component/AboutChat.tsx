"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  X,
  Video,
  Phone,
  AlertCircle,
  Trash2,
  Scroll,
  Star,
} from "lucide-react";
import Image from "next/image";

export function AboutChat({ onClose }: { onClose: () => void }) {
  const [muteNotifications, setMuteNotifications] = useState(false);
  const [disappearingMessages, setDisappearingMessages] = useState(false);

  return (
    <ScrollArea className="w-full flex-grow px-4 py-2 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
      <div>
        <div className="h-auto mt-6">
          <div className="flex flex-col items-center space-y-3 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/avatar.png?height=32&width=32" alt="Contact" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-xl font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2">About</h4>
              <p className="text-sm text-muted-foreground">
                Hello! I'm using this chat app.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">
                Media, links and docs
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden relative  bg-muted rounded-md "
                  >
                    <Image
                      src={"/placeholder.png?height=32&width=32"}
                      alt="Contact"
                      fill
                      className="filter backdrop-blur-xl "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="mute-notifications">Mute notifications</Label>
            <Switch
              id="mute-notifications"
              checked={muteNotifications}
              onCheckedChange={setMuteNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="disappearing-messages">Disappearing messages</Label>
            <Switch
              id="disappearing-messages"
              checked={disappearingMessages}
              onCheckedChange={setDisappearingMessages}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Button variant="secondary" className="w-full">
          <Star className="mr-2 h-4 w-4" /> Add to favorites
        </Button>
        <Button variant="destructive" className="w-full">
          <AlertCircle className="mr-2 h-4 w-4" /> Block John Doe
        </Button>
        <Button variant="destructive" className="w-full">
          <AlertCircle className="mr-2 h-4 w-4" /> Report John Doe
        </Button>
        <Button variant="destructive" className="w-full">
          <Trash2 className="mr-2 h-4 w-4" /> Delete chat
        </Button>
      </div>
    </ScrollArea>
  );
}
