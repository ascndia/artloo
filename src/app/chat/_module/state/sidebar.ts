import { IChat } from "../type/chat";

interface searchingStore {
  isSearching: boolean;
  setIsSearching: (open: boolean) => void;
  toggleSearching: () => void;
}

interface searchingTerm {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearchTerm: () => void;
}

interface sidebarStore {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}
