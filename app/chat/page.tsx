import React from "react";
import MessageInput from "./_module/component/Input";
import { Message } from "./_module/component/Messages";

export default function Chat() {
  return (
    <div className="h-full flex flex-col p-2 gap-2 relative">
      <Message />
      <MessageInput />
    </div>
  );
}
