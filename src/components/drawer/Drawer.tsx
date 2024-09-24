"use client";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from "@/components/ui/drawer"; // Assuming you're using shadcn Drawer
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { useNotificationStore } from "@/state/notification";

export function NotificationDrawer() {
  const { containerRef, isOpen, setIsOpen } = useNotificationStore();
  console.log("containerRef", containerRef);
  if (!containerRef?.current) {
    return null;
  }

  return (
    <>
      <Drawer open={isOpen} direction="right" onOpenChange={setIsOpen}>
        <DrawerPortal container={containerRef?.current} />
        <DrawerOverlay className="fixed inset-0 bg-transparent" />
        <DrawerContent className=" w-[400px] fixed top-0 right-0">
          <div className="w-auto !border-t h-full p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2"
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
