"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { NotificationDrawer } from "./Drawer/Drawer copy";
import { HeaderComponent } from "./Heading";
import { SubHeaderComponent } from "./SubHeading";
import { useNotificationStore } from "@/state/notification";
import Footer from "./Footer";
import { AiChatButton } from "./Ai/AiButton";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useSidebarStore } from "@/state/generate-sidebar";
import GenerateSidebar from "./Sidebar/GenerateSidebar";
import { cn } from "@/lib/utils";
import useBreakpoint from "@/hooks/useBreakpoint";
import { MobileSearchDrawer } from "./SearchDrawer";

export default function FixedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLElement>(null);
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

  const isBreakpoint = useBreakpoint(containerRef);

  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        {sidebarOpen && (
          <>
            <Panel
              id="left-panel"
              order={1}
              defaultSize={32}
              minSize={32}
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
          <div className={cn("flex flex-col h-screen")}>
            <HeaderComponent />
            <main ref={containerRef} className="flex-1 relative overflow-auto">
              <NotificationDrawer />
              <MobileSearchDrawer />
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
