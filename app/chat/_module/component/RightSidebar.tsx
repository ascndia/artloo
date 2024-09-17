import React from "react";
import { AboutChat } from "./AboutChat";
import { usePageStore } from "../state/page";

export default function RightSidebar() {
  const { setRightSidebarOpen } = usePageStore();
  return (
    <div className="flex h-full flex-col gap-2">
      <AboutChat onClose={() => setRightSidebarOpen(false)} />
    </div>
  );
}
