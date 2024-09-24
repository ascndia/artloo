"use client";
import { Box } from "@chakra-ui/layout";
import {
  Background,
  ColorMode,
  Controls,
  Panel,
  ReactFlow,
} from "@xyflow/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import Flow from "./_module/Flow";
import { Button } from "@/components/ui/button";
import { SidebarIcon } from "lucide-react";
import { useAtom } from "jotai";
import { pageState } from "./template";

export default function Hello() {
  const { theme, setTheme } = useTheme();
  const [state] = useAtom(pageState);
  return (
    <Box position={"relative"} className="w-full h-full">
      <Flow />
    </Box>
  );
}
