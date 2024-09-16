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

import { AiChatButton } from "@/components/Ai/ai-chat-button";
import Footer from "@/components/Footer";
import { Heading } from "./_module/component/Heading";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { usePageStore } from "./_module/state/page";
import LeftSidebar from "./_module/component/LeftSidebar";
import RightSidebar from "./_module/component/RightSidebar";

export default function FixedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLeftSidebarOpen, isRightSidebarOpen } = usePageStore();
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen">
        <Heading />
        <main className="flex-1 relative overflow-auto">
          <PanelGroup direction="horizontal">
            {isLeftSidebarOpen && (
              <>
                <Panel
                  minSize={24}
                  defaultSize={24}
                  maxSize={30}
                  id="left-panel"
                  order={1}
                >
                  <LeftSidebar />
                </Panel>
                <PanelResizeHandle className="w-[2px] bg-foreground/10" />
              </>
            )}
            <Panel id="main-panel" defaultSize={40} maxSize={100} order={2}>
              {children}
            </Panel>
            {isRightSidebarOpen && (
              <>
                <PanelResizeHandle className="w-[2px] bg-foreground/10" />
                <Panel
                  minSize={24}
                  defaultSize={24}
                  maxSize={30}
                  id="right-panel"
                  order={3}
                >
                  <RightSidebar />
                </Panel>
              </>
            )}
          </PanelGroup>
        </main>
        <AiChatButton />
        <Footer />
      </div>
    </div>
  );
}
