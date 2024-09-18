import React from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { Label } from "@/components/ui/label";

export type LoraNode = Node<{ lora_name: string }, "checkpoint">;

export default function LoraNode(props: NodeProps<LoraNode>) {
  const [value, setValue] = React.useState(props.data.lora_name);
  return (
    <Box className="bg-slate-700 px-3 py-2 rounded-md">
      <Flex direction={"column"} className="gap-2">
        <Label className="text-xs">Lora</Label>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger
            defaultValue={props.data.lora_name}
            className="border text-sm p-2 rounded-md"
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
