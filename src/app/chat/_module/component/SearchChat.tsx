"use client";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IChat, NewMessage } from "../type/chat";
import { useChatStore } from "../state/chats";
import { Search, SendIcon } from "lucide-react";

const SearchChat = () => {
  const [content, setContent] = useState("");
  const [chatList, setChatList] = useState<Record<string, IChat>>({});
  const { chats, isSeachingChat, setSeachingChat } = useChatStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (content.trim()) {
      setChatList(chats);
      setContent("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="message-input flex items-center"
    >
      <Input
        ref={inputRef}
        onFocus={() => setSeachingChat(true)}
        onBlur={() => setSeachingChat(false)}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Find users or groups..."
        className="w-full rounded-r-none z-10 sm:text-sm"
      />
      <Button
        variant={"outline"}
        type="submit"
        className="border-l-0 rounded-l-none"
      >
        <Search className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default SearchChat;
