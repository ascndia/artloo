// "use client";

// import { AiChatButton } from "@/components/Ai/AiButton";
// import Footer from "@/components/Footer";
// import { Heading } from "./_module/component/Heading";
// import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
// import { usePageStore } from "./_module/state/page";
// import LeftSidebar from "./_module/component/LeftSidebar";
// import RightSidebar from "./_module/component/RightSidebar";
// import useIsMobile from "@/hooks/useIsMobile";

// export default function FixedLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { isLeftSidebarOpen, isRightSidebarOpen } = usePageStore();
//   const isMobile = useIsMobile();
//   return (
//     <div className="h-screen">
//       <div className="flex flex-col h-screen">
//         <Heading />
//         <main className="flex-1 relative overflow-auto">
//           <PanelGroup direction="horizontal">
//             {isLeftSidebarOpen && (
//               <>
//                 <Panel
//                   minSize={24}
//                   defaultSize={24}
//                   maxSize={30}
//                   id="left-panel"
//                   order={1}
//                 >
//                   <LeftSidebar />
//                 </Panel>
//                 <PanelResizeHandle className="w-[2px] bg-foreground/10" />
//               </>
//             )}
//             <Panel id="main-panel" defaultSize={40} maxSize={100} order={2}>
//               {children}
//             </Panel>
//             {isRightSidebarOpen && (
//               <>
//                 <PanelResizeHandle className="w-[2px] bg-foreground/10" />
//                 <Panel
//                   minSize={24}
//                   defaultSize={24}
//                   maxSize={30}
//                   id="right-panel"
//                   order={3}
//                 >
//                   <RightSidebar />
//                 </Panel>
//               </>
//             )}
//           </PanelGroup>
//         </main>
//         {/* <AiChatButton /> */}
//         <Footer />
//       </div>
//     </div>
//   );
// }

"use client";

import { AiChatButton } from "@/components/Ai/AiButton";
import Footer from "@/components/Footer";
import { Heading } from "./_module/component/Heading";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { usePageStore } from "./_module/state/page";
import LeftSidebar from "./_module/component/LeftSidebar";
import RightSidebar from "./_module/component/RightSidebar";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";

export default function FixedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isLeftSidebarOpen,
    isRightSidebarOpen,
    setRightSidebarOpen,
    setLeftSidebarOpen,
  } = usePageStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setRightSidebarOpen(false);
      setLeftSidebarOpen(true);
    }
  }, [isMobile]);
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen">
        <Heading />
        <main className="flex-1 relative overflow-auto">
          {isMobile ? (
            <>
              {isLeftSidebarOpen && (
                <div className="absolute inset-0 z-10  flex flex-col">
                  <LeftSidebar />
                </div>
              )}
              {isRightSidebarOpen && (
                <div className="absolute inset-0 z-10  flex flex-col">
                  <RightSidebar />
                </div>
              )}
              {!isLeftSidebarOpen && !isRightSidebarOpen && (
                <div>{children}</div>
              )}
            </>
          ) : (
            <PanelGroup direction="horizontal">
              {isLeftSidebarOpen && (
                <>
                  <Panel
                    minSize={24}
                    defaultSize={24}
                    maxSize={60}
                    id="left-panel"
                    order={1}
                  >
                    <LeftSidebar />
                  </Panel>
                  <PanelResizeHandle className="w-[2px] bg-foreground/10" />
                </>
              )}
              <Panel
                id="main-panel"
                defaultSize={40}
                minSize={40}
                maxSize={100}
                order={2}
              >
                {children}
              </Panel>
              {isRightSidebarOpen && (
                <>
                  <PanelResizeHandle className="w-[2px] bg-foreground/10" />
                  <Panel
                    minSize={24}
                    defaultSize={24}
                    maxSize={60}
                    id="right-panel"
                    order={3}
                  >
                    <RightSidebar />
                  </Panel>
                </>
              )}
            </PanelGroup>
          )}
        </main>
        {/* <AiChatButton /> */}
        <Footer />
      </div>
    </div>
  );
}
