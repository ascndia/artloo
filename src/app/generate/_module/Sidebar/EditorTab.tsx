import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Box, Flex } from "@chakra-ui/layout";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNodes } from "@xyflow/react";
import { useFlowContext } from "../FlowProvider";
import MultipleSelector, { Option } from "@/components/ui/multiple-select";

export default function EditorTab() {
  const { addCheckpoint, addLora, addCLIP, addKSampler } = useFlowContext();
  const [checkpoint, setCheckpoint] = React.useState("");
  const [lora, setLora] = React.useState("");
  return (
    <Box h={"100%"} className="space-y-4">
      <Flex w={"full"} direction={"column"} gap={8}>
        <Label>Add checkpoint</Label>
        <Flex w={"full"}>
          <Select
            onValueChange={(value) => setCheckpoint(value)}
            defaultValue="apple"
          >
            <SelectTrigger className="rounded-r-none z-[1]">
              <SelectValue placeholder="Select a checkpoint" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Prefect Pony</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            onClick={() => addCheckpoint(checkpoint)}
            className="border-l-0 rounded-l-none"
            variant={"outline"}
          >
            Add
          </Button>
        </Flex>
      </Flex>
      <Flex w={"full"} direction={"column"} gap={8}>
        <Label>Add lora</Label>
        <Flex w={"full"}>
          <Select
            onValueChange={(value) => setLora(value)}
            defaultValue="kuroko"
          >
            <SelectTrigger className="rounded-r-none z-[1]">
              <SelectValue placeholder="Select a checkpoint" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="kuroko">Kuroko</SelectItem>
                <SelectItem value="banana">Jean Alter</SelectItem>
                <SelectItem value="blueberry">Easy nAi</SelectItem>
                <SelectItem value="grapes">Comic panel</SelectItem>
                <SelectItem value="pineapple">One piece girl</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            onClick={() => addLora(lora)}
            className="border-l-0 rounded-l-none"
            variant={"outline"}
          >
            Add
          </Button>
        </Flex>
      </Flex>
      <Flex w={"full"} direction={"column"} gap={8}>
        <Label>Add CLIP</Label>
        <Button onClick={() => addCLIP("")} variant={"outline"}>
          Add CLIP
        </Button>
      </Flex>
      <Flex w={"full"} direction={"column"} gap={8}>
        <Label>Add KSampler</Label>
        <Button onClick={() => addKSampler()} variant={"outline"}>
          Add KSampler
        </Button>
      </Flex>
    </Box>
  );
}
// // Define the base Option interface (if needed)
// interface Option {
//   label: string;
//   value: string;
// }

// // Extend Option with Lora interface
// interface Lora extends Option {
//   label: string;
//   value: string;
// }

// // Define the options list based on the Lora interface
// const OPTIONS: Lora[] = [
//   { label: "Lora Alpha", value: "lora_alpha_v1" },
//   { label: "Lora Beta", value: "lora_beta_v2" },
//   { label: "Lora Gamma", value: "lora_gamma_v3" },
//   { label: "Lora Delta", value: "lora_delta_v4" },
//   { label: "Lora Epsilon", value: "lora_epsilon_v5" },
//   { label: "Lora Zeta", value: "lora_zeta_v6" },
// ];
{
  /* <Flex w={"full"} direction={"column"} gap={8}>
  <Label>Add Lora</Label>
  <Flex w={"full"}>
    <MultipleSelector
      emptyIndicator="No Lora"
      className="rounded-r-none z-[1]"
      options={OPTIONS as Option[]}
      onChange={(value) => setLora(value)}
    />
    <Button
      onClick={() => addCheckpoint(checkpoint)}
      className="border-l-0 h-auto rounded-l-none"
      variant={"outline"}
    >
      Add
    </Button>
  </Flex>
</Flex>; */
}
