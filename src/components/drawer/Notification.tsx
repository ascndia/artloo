"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function NavbarWithNotifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideRead, setHideRead] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">MyApp</h1>
        <Button onClick={() => setIsOpen(!isOpen)}>Notifications</Button>
      </nav>

      {/* Notification Menu (below the navbar) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg border border-gray-300 rounded-lg z-50">
          <div className="p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Notification Header */}
            <h2 className="text-lg font-semibold mb-4">Notifications</h2>

            {/* Tabs */}
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

              {/* Tab Content */}
              <TabsContent value="all">
                <p>All caught up! Nothing to see here.</p>
              </TabsContent>
              <TabsContent value="comments">
                <p>No comments yet!</p>
              </TabsContent>
              <TabsContent value="updates">
                <p>No updates yet!</p>
              </TabsContent>
              <TabsContent value="milestones">
                <p>No milestones yet!</p>
              </TabsContent>
              <TabsContent value="bounties">
                <p>No bounties yet!</p>
              </TabsContent>
              <TabsContent value="buzz">
                <p>No buzz yet!</p>
              </TabsContent>
              <TabsContent value="system">
                <p>No system notifications yet!</p>
              </TabsContent>
            </Tabs>

            {/* Hide Read Toggle */}
            <div className="flex items-center justify-between mt-4">
              <span>Hide Read</span>
              <Switch
                checked={hideRead}
                onCheckedChange={(value) => setHideRead(value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
