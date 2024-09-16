"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { useNotificationStore } from "@/state/notification";
import { Drawer } from "vaul";
import { useEffect, useRef } from "react";

export function NotificationDrawer() {
  const { containerRef, isOpen, setIsOpen } = useNotificationStore();

  // const drawerRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       drawerRef.current &&
  //       !drawerRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen, setIsOpen]);

  return (
    <>
      <Drawer.Root
        modal={false}
        open={isOpen}
        onOpenChange={setIsOpen}
        direction="right"
      >
        <Drawer.Portal container={containerRef?.current}>
          <Drawer.Content
            // ref={drawerRef}
            className={`h-full border-l bg-background fixed z-40 top-14 right-0 md:w-auto w-full`}
          >
            <div className="w-auto border-t h-full p-4 ">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-lg font-semibold mb-4">Notifications</h2>

              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="milestones">Milestones</TabsTrigger>
                  <TabsTrigger value="bounties">Bounties</TabsTrigger>
                  <TabsTrigger value="buzz">Buzz</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <p>All caught up! Nothing to see here.</p>
                </TabsContent>
                <TabsContent value="comments">
                  <p>No comments yet!</p>
                </TabsContent>
              </Tabs>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
