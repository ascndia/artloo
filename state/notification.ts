import { create } from "zustand";
import { RefObject } from "react";

// Define the store interface
interface NotificationStore {
  containerRef: RefObject<HTMLDivElement> | null;
  setContainerRef: (ref: RefObject<HTMLDivElement>) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleOpen: () => void;
}

// Create the Zustand store
export const useNotificationStore = create<NotificationStore>((set) => ({
  containerRef: null,
  setContainerRef: (ref) => set(() => ({ containerRef: ref })),
  isOpen: false, // Drawer state
  setIsOpen: (open) => set(() => ({ isOpen: open })),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
