import React from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { Label } from "@/components/ui/label";
import BaseNode from "../BaseNode";

export type LoraNode = Node<{ lora_name: string }, "checkpoint">;

export default function LoraNode({
  data,
  selected = false,
  ...props
}: NodeProps<LoraNode>) {
  const [value, setValue] = React.useState(data.lora_name);
  return (
    <BaseNode
      data={data}
      {...props}
      isVisible={selected}
      label="Lora"
      className="bg-purple-400 "
    >
      <Box className="w-full p-2">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger
            defaultValue={data.lora_name}
            className="border w-full text-[12px] p-1 rounded-md"
          >
            <SelectValue placeholder="Select lora" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"kuroko"}>Kuroko</SelectItem>
            <SelectItem value="banana">Easy Manga</SelectItem>
            <SelectItem value="blueberry">One piece girl</SelectItem>
            <SelectItem value="bettercloth">Better clothings</SelectItem>
          </SelectContent>
        </Select>
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
