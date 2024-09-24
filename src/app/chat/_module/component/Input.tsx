"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewMessage } from "../type/chat";
import { useChatStore } from "../state/chats";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

const MessageInput = () => {
  const [content, setContent] = useState("");
  const { activeChat } = useChatStore();

  const handleSendMessage = () => {
    if (content.trim()) {
      const Message: NewMessage = {
        chatId: activeChat?.id as string,
        content: content,
        type: "text",
      };
      setContent(""); // Clear input after sending
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="message-input flex items-end gap-2"
    >
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type a message..."
        className="w-full sm:text-sm resize-none"
      />
      <Button variant={"outline"} type="submit" className="">
        <SendIcon className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default MessageInput;
