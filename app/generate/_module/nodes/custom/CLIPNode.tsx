import React from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BaseNode from "../BaseNode";

export type LoraNode = Node<{ label: string; text: string }, "clip">;

export default function CLIPNode({
  data,
  selected = false,
  ...props
}: NodeProps<LoraNode>) {
  const [value, setValue] = React.useState(data.text);
  return (
    <BaseNode
      data={data}
      {...props}
      isVisible={selected}
      label="CLIP"
      className="bg-yellow-400 dark:bg-yellow-500 min-w-56"
    >
      <Box className="p-2">
        <Flex direction={"column"} className="gap-2">
          <Textarea
            placeholder="Enter your propmt here"
            className="p-1 text-xs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Flex>
      </Box>
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
    </BaseNode>
  );
}
