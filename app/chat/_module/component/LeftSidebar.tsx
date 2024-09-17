import React from "react";
import SearchChat from "./SearchChat";
import { ChatList } from "./ChatList";

export default function LeftSidebar() {
  return (
    <div className="flex h-full p-2 flex-col gap-2">
      <SearchChat />
      <ChatList />
      {/* <div className="flex-grow"> */}
      {/* <ChatList /> */}
      {/* <div className="p-2 h-full bg-red-200"></div>
      </div> */}
    </div>
  );
}
