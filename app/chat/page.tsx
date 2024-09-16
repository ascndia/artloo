import React from "react";
import MessageInput from "./_module/component/Input";

export default function Chat() {
  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1"></div>
      <div className="p-2 sticky bottom-0">
        <MessageInput />
      </div>
    </div>
  );
}
