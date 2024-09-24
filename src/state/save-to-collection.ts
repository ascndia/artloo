import { create } from "zustand";

export interface SaveToCollectionState {
  post: any | null;
  isDialogOpen: boolean;
  openDialog: (post: any) => void;
  closeDialog: () => void;
}

export const useSaveToCollection = create<SaveToCollectionState>((set) => ({
  post: null,
  isDialogOpen: false,
  openDialog: (post) =>
    set((state) => ({ ...state, post, isDialogOpen: true })),
  closeDialog: () =>
    set((state) => ({ ...state, post: null, isDialogOpen: false })),
}));
