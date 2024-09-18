"use client";
import React, { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/layout";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { atom, useAtom } from "jotai";
import Sidebar from "./_module/component/Sidebar";
import { Button } from "@/components/ui/button";
import { SidebarIcon } from "lucide-react";
import { ReactFlowProvider } from "@xyflow/react";
import { FlowProvider } from "./_module/FlowProvider";

interface pageState {
  isLeftSidebarOpen: boolean;
}

export const pageState = atom<pageState>({
  isLeftSidebarOpen: true,
});

export default function template({ children }: PropsWithChildren) {
  const [state, setState] = useAtom(pageState);
  const handleOpen = () => {
    setState((prev) => ({ ...prev, isLeftSidebarOpen: true }));
  };

  return (
    <FlowProvider>
      <Box h={"100vh"}>
        {!state.isLeftSidebarOpen && (
          <Button
            className="absolute z-50 top-2 left-2"
            variant={"outline"}
            size={"icon"}
            onClick={handleOpen}
          >
            <SidebarIcon className="w-5 h-5" />
          </Button>
        )}

        <PanelGroup direction="horizontal">
          {state.isLeftSidebarOpen && (
            <>
              <Panel
                minSize={24}
                defaultSize={32}
                maxSize={48}
                order={1}
                id="left"
              >
                <Sidebar />
              </Panel>
              <PanelResizeHandle className="w-1 bg-foreground/10" />
            </>
          )}
          <Panel order={2} id="main" defaultSize={68} maxSize={100}>
            {children}
          </Panel>
        </PanelGroup>
      </Box>
    </FlowProvider>
  );
}
