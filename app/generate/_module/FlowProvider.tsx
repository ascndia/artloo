import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  PropsWithChildren,
  useMemo,
} from "react";
import {
  addEdge,
  ColorMode,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  NodeProps,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useTheme } from "next-themes";
import { string } from "zod";
import CheckpointNode from "./nodes/custom/CheckpointNode";
import LoraNode from "./nodes/custom/LoraNode";
import CLIPNode from "./nodes/custom/CLIPNode";
import KSamplerNode, { KSamplerType } from "./nodes/custom/KSamplerNode";
import { createKSamplerNode } from "./NodeFactory";
import { ReactFlowProvider } from "@xyflow/react";
interface FlowContextType {
  nodes: Node[];
  edges: Edge[];
  nodeTypes: NodeTypes;
  colorMode: ColorMode | undefined;
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  onNodesDelete: (nodes: any) => void;
  addNode: () => void;
  addCheckpoint: (model_name: string) => void;
  addLora: (model_name: string) => void;
  addCLIP: (text: string) => void;
  addKSampler: (kSamplerType?: KSamplerType) => void;
  onConnect: (params: any) => void;
}

const FlowContext = createContext<FlowContextType>({
  nodes: [],
  edges: [],
  nodeTypes: {},
  colorMode: "light",
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onNodesDelete: () => {},
  addNode: () => {},
  addCheckpoint: () => {},
  addLora: () => {},
  addCLIP: () => {},
  addKSampler: () => {},
  onConnect: () => {},
});

export const useFlowContext = () => useContext(FlowContext);

export const FlowProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const [colorMode, setColorMode] = useState<ColorMode>("light");
  const initialNodes: Node[] = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "Hello", model_name: "SDXL" },
      type: "checkpoint",
    },
    {
      id: "2",
      position: { x: 160, y: 0 },
      data: { label: "World", lora_name: "bettercloth" },
      type: "lora",
    },
    {
      id: "3",
      position: { x: 300, y: 0 },
      data: {
        label: "CLIP",
        text: "girl under the tree, in the fantasy world",
      },
      type: "clip",
    },
    {
      id: "4",
      position: { x: 300, y: 140 },
      data: {
        label: "CLIP",
        text: "low quality, extra limb, score_1",
      },
      type: "clip",
    },
    {
      id: "5",
      position: { x: 560, y: 0 },
      data: {
        label: "k_sampler",
        ...createKSamplerNode(),
      },
      type: "ksampler",
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    {
      id: "e2-3",
      source: "2",
      target: "3",
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
    },
    {
      id: "e3-5",
      source: "3",
      target: "5",
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
    },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setColorMode(theme === "dark" ? "dark" : "light");
  }, [theme]);

  const addNode = useCallback(() => {
    setNodes((nds) => [
      ...nds,
      {
        id: `${nds.length + 1}`,
        position: { x: 0, y: 0 },
        data: { label: "New Node" },
        style: { backgroundColor: "red" },
      },
    ]);
  }, [setNodes]);

  const addCheckpoint = useCallback(
    (model_name: string) => {
      setNodes((nds) => [
        ...nds,
        {
          id: `${nds.length + 1}`,
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "checkpoint",
          data: { label: model_name, model_name: model_name },
          // style: { backgroundColor: "blue" },
        },
      ]);
    },
    [setNodes]
  );

  const addLora = useCallback(
    (lora_name: string) => {
      setNodes((nds) => [
        ...nds,
        {
          id: `${nds.length + 1}`,
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "lora",
          data: { label: lora_name, lora_name: lora_name },
        },
      ]);
    },
    [setNodes]
  );

  const addCLIP = useCallback(
    (text: string) => {
      setNodes((nds) => [
        ...nds,
        {
          id: `${nds.length + 1}`,
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "clip",
          data: { label: "CLIP", text: text },
        },
      ]);
    },
    [setNodes]
  );

  const addKSampler = useCallback(
    (param?: KSamplerType) => {
      setNodes((nds) => [
        ...nds,
        {
          id: `${nds.length + 1}`,
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "ksampler",
          data: {
            label: "k_sampler",
            ...(param ? param : createKSamplerNode()),
          },
          // data: { label: "k_sampler", ...param },
        },
      ]);
    },
    [setNodes]
  );
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodesDelete = () => {};
  // (nodeId: string) => {
  //   setNodes((nds) => nds.filter((nd) => nd.id !== nodeId));
  //   console.log("nodesToDelete", nodeId);
  // },
  // [setNodes]
  const nodeTypes = useMemo(
    () => ({
      checkpoint: CheckpointNode,
      lora: LoraNode,
      clip: CLIPNode,
      ksampler: KSamplerNode,
    }),
    []
  );
  return (
    <ReactFlowProvider>
      <FlowContext.Provider
        value={{
          nodes,
          edges,
          nodeTypes,
          colorMode,
          onNodesChange,
          onEdgesChange,
          onNodesDelete,
          addNode,
          addCheckpoint,
          addLora,
          addCLIP,
          addKSampler,
          onConnect,
        }}
      >
        {children}
      </FlowContext.Provider>
    </ReactFlowProvider>
  );
};
