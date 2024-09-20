import {
  addEdge,
  Background,
  ColorMode,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useTheme } from "next-themes";
import React, { useCallback, useEffect } from "react";
import { type Node } from "@xyflow/react";
import { Box } from "@chakra-ui/layout";
import { Button } from "@/components/ui/button";
import { useFlowContext } from "./FlowProvider";

export default function Flow() {
  const { ...rest } = useFlowContext();
  const { theme } = useTheme();
  return (
    <Box h={"100%"}>
      <ReactFlow
        onNodeClick={(e) => console.log(e)}
        fitView
        proOptions={{ hideAttribution: true }}
        {...rest}
      >
        <Background
          // bgColor={theme === "dark" ? "#333333" : "#eeeeee"}
          color="#888888"
        />
        <Controls />
      </ReactFlow>
    </Box>
  );
}
