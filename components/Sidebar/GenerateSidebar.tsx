import { useSidebarStore } from "@/state/generate-sidebar";
import {
  BrushIcon,
  CircleAlert,
  CircleHelp,
  Clock,
  Grip,
  Images,
  X,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function GenerateSidebar() {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  return (
    <aside className="p-2 bg-background relative">
      <div
        title="Close sidebar"
        aria-label="Close sidebar"
        className="absolute cursor-pointer top-3 right-3"
        onClick={() => setSidebarOpen(false)}
      >
        <X className="h-6 w-6" />
      </div>
      <main className="mb-4 w-full ">
        <Tabs className="w-full" defaultValue="generate">
          <div className="w-full text-center">
            <TabsList className="">
              <TabsTrigger value="generate">
                <BrushIcon className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="history">
                <Clock className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="gallery">
                <Grip className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="generate">
            <div className="mt-4">
              <div>
                <Label className="mr-2">Workflow</Label>
                <Popover>
                  <PopoverTrigger>
                    <CircleAlert className="h-3 text-foreground/50 w-3" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div>
                      Go beyond text-to-image with different workflows.
                      Currently we have limited workflows that cover some of the
                      most important use cases. Community workflows coming soon.
                    </div>
                  </PopoverContent>
                </Popover>
                <Select
                  // onValueChange={field.onChange}
                  defaultValue={"Text to Image"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Text to Image">Text to Image</SelectItem>
                    <SelectItem value="Text to Image Face fix">
                      Text to Image Face fix
                    </SelectItem>
                    <SelectItem value="Image To Image">
                      Image To Image
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div>History</div>
          </TabsContent>
          <TabsContent value="gallery">
            <div>Gallery</div>
          </TabsContent>
        </Tabs>
      </main>
    </aside>
  );
}
