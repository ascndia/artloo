import React from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowBigDown } from "lucide-react";
import { Label } from "@/components/ui/label";

export type CheckpointNode = Node<{ model_name: string }, "checkpoint">;

export default function CheckpointNode(props: NodeProps<CheckpointNode>) {
  return (
    <Box className="bg-slate-700 px-3 py-2 rounded-md">
      <Flex direction={"column"} className="gap-2">
        <Label className="text-xs">Checkpoint</Label>
        <Select defaultValue={props.data.model_name}>
          <SelectTrigger className="border text-sm p-2 rounded-md">
            <SelectValue placeholder="Select a checkpoint" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prefectPony">Prefect Pony</SelectItem>
            <SelectItem value="SDXL">SDXL</SelectItem>
            <SelectItem value="blueberry">Flux</SelectItem>
            <SelectItem value="grapes">Midjourney v6</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      <Handle
        type="source"
        className="!w-3 !h-3 !bg-foreground"
        position={Position.Right}
      />
    </Box>
  );
}
