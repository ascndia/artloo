"use client";

import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  sender: "user1" | "user2";
  content: string;
  timestamp: string;
}

const messages: Message[] = [
  {
    id: 1,
    sender: "user1",
    content: "When are you coming?",
    timestamp: "05:40pm",
  },
  {
    id: 2,
    sender: "user2",
    content: "Hi Dear, I'll be there by 7:30pm, btw where are u?",
    timestamp: "05:30pm",
  },
  { id: 3, sender: "user1", content: "DesiBoy Pub", timestamp: "05:32pm" },
  { id: 4, sender: "user2", content: "Coming...", timestamp: "05:50pm" },
  {
    id: 1,
    sender: "user1",
    content: "When are you coming?",
    timestamp: "05:40pm",
  },
  {
    id: 2,
    sender: "user2",
    content: "Hi Dear, I'll be there by 7:30pm, btw where are u?",
    timestamp: "05:30pm",
  },
  { id: 3, sender: "user1", content: "DesiBoy Pub", timestamp: "05:32pm" },
  { id: 4, sender: "user2", content: "Coming...", timestamp: "05:50pm" },
];

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isUser2 = message.sender === "user2";
  return (
    <div className={`flex items-end space-x-2 ${isUser2 ? "justify-end" : ""}`}>
      {!isUser2 && (
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.png?height=32&width=32" alt="User 1" />
        </Avatar>
      )}
      <div className={`flex flex-col ${isUser2 ? "items-end" : "items-start"}`}>
        <div
          className={`px-3 py-2 text-xs rounded-lg ${
            isUser2 ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          {message.content}
        </div>
        <span className="text-xs text-muted-foreground mt-1">
          {message.timestamp}
        </span>
      </div>
      {isUser2 && (
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.png?height=32&width=32" alt="User 2" />
        </Avatar>
      )}
    </div>
  );
};

export function Message() {
  return (
    <ScrollArea className="w-full flex-grow mx-auto">
      <div className="p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
}
