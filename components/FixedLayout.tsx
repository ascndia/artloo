// "use client";

// import { useEffect, useRef } from "react";
// import { NotificationDrawer } from "./drawer/Drawer copy";
// import { HeaderComponent } from "./header";
// import { SubHeaderComponent } from "./sub-header";
// import { useNotificationStore } from "@/state/notification";
// import Footer from "./Footer";
// import { AiChatButton } from "./Ai/ai-chat-button";
// import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
// import { useSidebarStore } from "@/state/generate-sidebar";
// import GenerateSidebar from "./Sidebar/GenerateSidebar";

// export default function FixedLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const setContainerRef = useNotificationStore(
//     (state) => state.setContainerRef
//   );

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerRef(containerRef); // Only set the ref if it exists
//     }
//   }, [setContainerRef]); // Add setContainerRef to the dependency array

//   const { sidebarOpen } = useSidebarStore();
//   return (
//     <div className="h-screen">
//       <PanelGroup direction="horizontal">
//         {sidebarOpen && (
//           <>
//               <Panel
//                 id="left-panel"
//                 order={1}
//                 defaultSize={28}
//                 minSize={30}
//                 maxSize={60}
//               >
//                 <GenerateSidebar />
//               </Panel>
//               <PanelResizeHandle className="w-[2px] bg-foreground/10" />
//           </>
//         )}
//         <Panel
//           id="right-panel"
//           order={2}
//           defaultSize={100}
//           minSize={40}
//           maxSize={100}
//         >
//           <div className="flex flex-col h-screen">
//             <HeaderComponent />
//             <main ref={containerRef} className="flex-1 relative overflow-auto">
//               <NotificationDrawer />
//               <SubHeaderComponent />
//               {children}
//             </main>
//             <AiChatButton />
//             <Footer />
//           </div>
//         </Panel>
//       </PanelGroup>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { NotificationDrawer } from "./drawer/Drawer copy";
import { HeaderComponent } from "./header";
import { SubHeaderComponent } from "./sub-header";
import { useNotificationStore } from "@/state/notification";
import Footer from "./Footer";
import { AiChatButton } from "./Ai/ai-chat-button";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useSidebarStore } from "@/state/generate-sidebar";
import GenerateSidebar from "./Sidebar/GenerateSidebar";
import { cn } from "@/lib/utils";

export default function FixedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const setContainerRef = useNotificationStore(
    (state) => state.setContainerRef
  );

  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    if (containerRef.current) {
      setContainerRef(containerRef); // Only set the ref if it exists
    }
  }, [setContainerRef]); // Add setContainerRef to the dependency array

  const { sidebarOpen } = useSidebarStore();

  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        {sidebarOpen && (
          <>
            <Panel
              id="left-panel"
              order={1}
              defaultSize={28}
              minSize={28}
              maxSize={48}
              className="hidden md:block"
            >
              <GenerateSidebar />
            </Panel>
            <PanelResizeHandle
              className={`w-1 bg-foreground/10 hidden md:block`}
            />
          </>
        )}

        <Panel
          id="right-panel"
          order={2}
          defaultSize={100}
          minSize={40}
          maxSize={100}
        >
          <div className="flex flex-col h-screen">
            <HeaderComponent />
            <main ref={containerRef} className="flex-1 relative overflow-auto">
              <NotificationDrawer />
              <SubHeaderComponent />
              {children}
            </main>
            <AiChatButton />
            <Footer />
          </div>
        </Panel>
      </PanelGroup>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background">
          <GenerateSidebar />
        </div>
      )}
    </div>
  );
}
