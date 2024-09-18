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
  return (
    <Box h={"100%"}>
      <ReactFlow fitView {...rest}>
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
}
