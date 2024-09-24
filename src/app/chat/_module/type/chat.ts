import { z } from "zod";

export const MessageSchema = z.object({
  id: z.string(),
  chatId: z.string(),
  content: z.string(),
  sender: z.string(),
  createdAt: z.string(),
  type: z.string(),
});

export const NewMessageSchema = MessageSchema.extend({
  id: z.string().optional(),
  sender: z.string().optional(),
  createdAt: z.string().optional(),
});

export const ChatSchema = z.object({
  id: z.string(),
  name: z.string(),
  groupImage: z.string().optional(),
  offset: z.number().optional(),
  lastMessage: MessageSchema.optional(),
  createdAt: z.string(),
  messages: z.record(MessageSchema),
  type: z.string(),
});

const GroupChatSchema = ChatSchema.extend({
  description: z.string(),
});

const PrivateChatSchema = ChatSchema.extend({
  userId: z.string(),
});

export type Message = z.infer<typeof MessageSchema>;
export type NewMessage = z.infer<typeof NewMessageSchema>;
export type IChat = z.infer<typeof ChatSchema>;
export type IGroupChat = z.infer<typeof GroupChatSchema>;
export type IPrivateChat = z.infer<typeof PrivateChatSchema>;
