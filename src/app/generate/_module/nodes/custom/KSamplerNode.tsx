import React, { useRef } from "react";
import { Handle, NodeProps, Position, Node, NodeResizer } from "@xyflow/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { set } from "zod";
import BaseNode from "../BaseNode";

export type KSamplerType = {
  seed: number;
  CFG: number;
  step: number;
  sampler: string;
  denoise: number;
  scheduler: string;
};
export type KSamplerNode = Node<KSamplerType, "ksampler">;

export default function KSamplerNode({
  data = {
    seed: -1,
    CFG: 7,
    step: 32,
    sampler: "k_lms",
    denoise: 0.5,
    scheduler: "normal",
  },
  selected = false,
  ...props
}: NodeProps<KSamplerNode>) {
  const [step, setStep] = React.useState(data.step);
  const [seed, setSeed] = React.useState(data.seed);
  const [CFG, setCFG] = React.useState(data.CFG);
  const [sampler, setSampler] = React.useState(data.sampler);
  const [denoise, setDenoise] = React.useState(data.denoise);
  const [scheduler, setScheduler] = React.useState(data.denoise);
  return (
    <BaseNode
      data={data}
      {...props}
      isVisible={selected}
      className="bg-orange-400 h-full rounded-md"
      label="KSampler"
    >
      <Box className="p-2">
        <Flex direction={"column"} className="gap-4">
          <Flex direction={"column"} className="gap-2">
            <Label className="text-xs">Sampler</Label>
            <Select value={sampler} onValueChange={setSampler}>
              <SelectTrigger
                defaultValue={sampler}
                className="border text-[12px] p-1 rounded-md"
              >
                <SelectValue placeholder="Select sampler" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"k_lms"}>k_lms</SelectItem>
                <SelectItem value="euler">euler</SelectItem>
                <SelectItem value="eulera">euler ancestral</SelectItem>
                <SelectItem value="ddim">ddim</SelectItem>
              </SelectContent>
            </Select>
          </Flex>
          <Flex direction={"column"} className="gap-2">
            <Label className="text-xs">step</Label>
            <Input
              value={step}
              onChange={(e) => setStep(e.target.valueAsNumber)}
              type="number"
            />
          </Flex>
          <Flex direction={"column"} className="gap-2">
            <Label className="text-xs">seed</Label>
            <Input
              value={seed}
              onChange={(e) => setSeed(e.target.valueAsNumber)}
              type="number"
            />
          </Flex>
          <Flex direction={"column"} className="gap-2">
            <Label className="text-xs">CFG Scale</Label>
            <Input
              value={CFG}
              onChange={(e) => setCFG(e.target.valueAsNumber)}
            />
          </Flex>
          <Flex direction={"column"} className="gap-2">
            <Label className="text-xs">Denoise</Label>
            <Input
              value={denoise}
              onChange={(e) => setDenoise(e.target.valueAsNumber)}
            />
          </Flex>
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
