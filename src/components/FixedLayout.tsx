"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { NotificationDrawer } from "./drawer/Drawer copy";
import { HeaderComponent } from "./Heading";
import { SubHeaderComponent } from "./SubHeading";
import { useNotificationStore } from "@/state/notification";
import Footer from "./Footer";
import { useSidebarStore } from "@/state/generate-sidebar";
import GenerateSidebar from "@/components/sidebar/GenerateSidebar";
import { cn } from "@/lib/utils";
import useBreakpoint from "@/hooks/useBreakpoint";
import { MobileSearchDrawer } from "./SearchDrawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { AiChatButton } from "./ai/AiButton";

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
      <ResizablePanelGroup direction="horizontal">
        {sidebarOpen && (
          <>
            <ResizablePanel
              id="left-panel"
              order={1}
              defaultSize={28}
              minSize={28}
              maxSize={48}
              className="hidden md:block"
            >
              <GenerateSidebar />
            </ResizablePanel>
            <ResizableHandle
              withHandle
              // className={`w-1 bg-foreground/10 hidden md:block`}
            />
          </>
        )}

        <ResizablePanel
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
        </ResizablePanel>
      </ResizablePanelGroup>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background">
          <GenerateSidebar />
        </div>
      )}
    </div>
  );
}
