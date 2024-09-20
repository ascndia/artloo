import React from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowBigDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import BaseNode from "../BaseNode";

export type CheckpointNode = Node<{ model_name: string }, "checkpoint">;

export default function CheckpointNode({
  data,
  selected = false,
  ...props
}: NodeProps<CheckpointNode>) {
  return (
    <BaseNode
      data={data}
      {...props}
      isVisible={selected}
      label="Checkpoint"
      className="bg-green-400 dark:bg-green-600 "
    >
      <Box className="p-2">
        <Select defaultValue={data.model_name}>
          <SelectTrigger className="border text-[12px] p-1 rounded-md">
            <SelectValue placeholder="Select a checkpoint" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prefectPony">Prefect Pony</SelectItem>
            <SelectItem value="SDXL">SDXL</SelectItem>
            <SelectItem value="blueberry">Flux</SelectItem>
            <SelectItem value="grapes">Midjourney v6</SelectItem>
          </SelectContent>
        </Select>
      </Box>
      <Handle
        type="source"
        className="!w-3 !h-3 !bg-foreground"
        position={Position.Right}
      />
    </BaseNode>
  );
}
