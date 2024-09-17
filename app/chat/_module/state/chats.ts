import { create, StateCreator } from "zustand";
import { ChatSchema, IChat, Message, MessageSchema } from "../type/chat";

interface activeChat {
  activeChat: IChat | null;
  setActiveChat: (chat: IChat) => void;
}

interface selectedChat {
  selectedChat: IChat | null;
  setSelectedChat: (chat: IChat) => void;
}

interface isSeachingChat {
  isSeachingChat: boolean;
  toggleSeachingChat: () => void;
  setSeachingChat: (open: boolean) => void;
}

interface searchChatResult {
  allChats: Record<string, IChat>[];
  privateChats: Record<string, IChat>;
  groupChats: Record<string, IChat>;
  existingChats: Record<string, IChat>;
  notJoinedChats: Record<string, IChat>;
  setSearchChatResult: (searchResult: IChat[]) => void;
  setPrivateChats: (privateChats: IChat[]) => void;
  setGroupChats: (groupChats: IChat[]) => void;
  setExistingChats: (existingChats: IChat[]) => void;
  setNotJoinedChats: (notJoinedChats: IChat[]) => void;
}

interface ChatStoreState {
  chats: Record<string, IChat>;
  addChat: (chat: IChat) => void;
  addMessage: (chatId: string, message: Message) => void;
}

const createActiveChatSlice: StateCreator<activeChat> = (set) => ({
  activeChat: null,
  setActiveChat: (chat: IChat) => set({ activeChat: chat }),
});

const createSelectedChatSlice: StateCreator<selectedChat> = (set) => ({
  selectedChat: null,
  setSelectedChat: (chat: IChat) => set({ selectedChat: chat }),
});

const createIsSearchingChatSlice: StateCreator<isSeachingChat> = (set) => ({
  isSeachingChat: false,
  toggleSeachingChat: () =>
    set((state) => ({ isSeachingChat: !state.isSeachingChat })),
  setSeachingChat: (open: boolean) => set({ isSeachingChat: open }),
});

const createSearchChatResultSlice: StateCreator<searchChatResult> = (set) => ({
  allChats: {},
  privateChats: {},
  groupChats: {},
  existingChats: {},
  notJoinedChats: {},
  setSearchChatResult: (searchResult: IChat[]) =>
    set({ allChats: searchResult }),
  setPrivateChats: (privateChats: IChat[]) => set({ privateChats }),
  setGroupChats: (groupChats: IChat[]) => set({ groupChats }),
  setExistingChats: (existingChats: IChat[]) => set({ existingChats }),
  setNotJoinedChats: (notJoinedChats: IChat[]) => set({ notJoinedChats }),
});

const createMessageSlice: StateCreator<ChatStoreState> = (set) => ({
  chats: {},
  addChat: (chat) => {
    // Validate using Zod schema before adding chat
    const validatedChat = ChatSchema.safeParse(chat);
    if (validatedChat.success) {
      set((state) => ({
        chats: {
          ...state.chats,
          [chat.id]: validatedChat.data,
        },
      }));
    } else {
      console.error("Invalid chat data:", validatedChat.error.errors);
    }
  },
  addMessage: (chatId, message) => {
    // Validate using Zod schema before adding message
    const validatedMessage = MessageSchema.safeParse(message);
    if (validatedMessage.success) {
      set((state) => {
        const chat = state.chats[chatId];
        if (chat) {
          return {
            chats: {
              ...state.chats,
              [chatId]: {
                ...chat,
                messages: {
                  ...chat.messages,
                  [message.id]: validatedMessage.data,
                },
                lastMessage: validatedMessage.data,
              },
            },
          };
        }
        return state;
      });
    } else {
      console.error("Invalid message data:", validatedMessage.error.errors);
    }
  },
});

export const useChatStore = create<
  activeChat & selectedChat & ChatStoreState & isSeachingChat & searchChatResult
>((...set) => ({
  ...createActiveChatSlice(...set),
  ...createSelectedChatSlice(...set),
  ...createMessageSlice(...set),
  ...createIsSearchingChatSlice(...set),
  ...createSearchChatResultSlice(...set),
}));
