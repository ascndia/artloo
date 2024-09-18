import React from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type LoraNode = Node<{ label: string; text: string }, "clip">;

export default function CLIPNode(props: NodeProps<LoraNode>) {
  const [value, setValue] = React.useState(props.data.text);
  return (
    <Box className="bg-slate-700 min-w-56 px-3 py-2 rounded-md">
      <Flex direction={"column"} className="gap-2">
        <Label className="text-xs">{props.data.label}</Label>
        <Textarea
          placeholder="Enter your propmt here"
          className="p-1 text-xs"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Flex>
      <Handle
        type="target"
        className="!w-3 !h-3 !bg-foreground"
        position={Position.Left}
      />
      <Handle
        type="source"
        className="!w-3 !h-3 !bg-foreground"
        position={Position.Right}
      />
    </Box>
  );
}
