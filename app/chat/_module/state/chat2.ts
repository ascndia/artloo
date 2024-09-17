import { IChat, Message } from "../type/chat";

interface chatStore {
  chats: Record<string, IChat>;
  addChat: (chat: IChat) => void;
  setChats: (chats: Record<string, IChat>) => void;
}

interface MessageStore {
  messages: Record<string, Message[]>;
}
