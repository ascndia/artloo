"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleIcon, XIcon } from "lucide-react";
import { useChat } from "ai/react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { AvatarImage } from "../ui/avatar";
import Avatar from "../User/Avatar";
import { Input } from "../ui/input";

export function AiChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="fixed bottom-4 right-8 z-50">
      {isOpen ? (
        <div className="bg-background border rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="flex relative gap-3 items-center p-4 border-b">
            <Avatar username="AI Chat" userImage="/avatar.png" />
            <h3 className="font-semibold">Davinci</h3>
            <Button
              className="absolute right-4"
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg p-2 max-w-[80%] ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t flex items-center"
          >
            <div className="relative flex items-center w-full">
              <Input
                type="text"
                className="w-full p-2 rounded-r-none"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
              />
              <Button
                type="submit"
                variant="outline"
                // size="icon"
                className="border-l-none rounded-l-none"
              >
                <PaperPlaneIcon className="h-6 w-6" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="rounded-full h-12 w-12"
        >
          <MessageCircleIcon className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
