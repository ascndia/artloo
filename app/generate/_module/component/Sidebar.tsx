import { Box, Flex } from "@chakra-ui/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { X } from "lucide-react";
import { useAtom } from "jotai";
import { pageState } from "../../template";
import EditorTab from "../Sidebar/EditorTab";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [state, setState] = useAtom(pageState);
  const handleClose = () => {
    setState((prev) => ({ ...prev, isLeftSidebarOpen: false }));
  };

  return (
    <Box position={"relative"} h={"100%"} p={8}>
      <Button
        variant={"ghost"}
        className="absolute top-2 right-2"
        onClick={handleClose}
      >
        <X className="w-5 h-5" />
      </Button>
      <Tabs defaultValue="Editor">
        <Box marginBottom={16} w={"100%"} textAlign={"start"}>
          <TabsList>
            <TabsTrigger value="Editor">Editor</TabsTrigger>
            <TabsTrigger value="Workflow">Workflow</TabsTrigger>
            <TabsTrigger value="Drive">Drive</TabsTrigger>
            {/* <TabsTrigger value="Settings">Settings</TabsTrigger> */}
          </TabsList>
        </Box>
        <TabsContent value="Editor">
          <EditorTab />
        </TabsContent>
        <TabsContent value="Drive">
          <Box h={"100%"}>Aljn</Box>
        </TabsContent>
        <TabsContent value="Settings">
          <Switch
            checked={theme === "dark"}
            onCheckedChange={handleToggleTheme}
          />
        </TabsContent>
      </Tabs>
    </Box>
  );
}
