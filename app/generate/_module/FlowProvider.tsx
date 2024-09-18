import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  PropsWithChildren,
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

interface FlowContextType {
  nodes: Node[];
  edges: Edge[];
  nodeTypes: NodeTypes;
  colorMode: ColorMode | undefined;
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  addNode: () => void;
  addCheckpoint: (model_name: string) => void;
  addLora: (model_name: string) => void;
  addCLIP: (text: string) => void;
  onConnect: (params: any) => void;
}
// Create a context
const FlowContext = createContext<FlowContextType>({
  nodes: [],
  edges: [],
  nodeTypes: {},
  colorMode: "light",
  onNodesChange: () => {},
  onEdgesChange: () => {},
  addNode: () => {},
  addCheckpoint: () => {},
  addLora: () => {},
  addCLIP: () => {},
  onConnect: () => {},
});

export const useFlowContext = () => useContext(FlowContext);

export const FlowProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const [colorMode, setColorMode] = useState<ColorMode>("light");
  const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "Hello", model_name: "SDXL" },
      type: "checkpoint",
    },
    {
      id: "2",
      position: { x: 120, y: 0 },
      data: { label: "World", lora_name: "bettercloth" },
      type: "lora",
    },
    {
      id: "3",
      position: { x: 280, y: 0 },
      data: {
        label: "CLIP",
        text: "girl under the tree, in the fantasy world",
      },
      type: "clip",
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    {
      id: "e2-3",
      source: "2",
      target: "3",
    },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = {
    checkpoint: CheckpointNode,
    lora: LoraNode,
    clip: CLIPNode,
  };

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

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <FlowContext.Provider
      value={{
        nodes,
        edges,
        nodeTypes,
        colorMode,
        onNodesChange,
        onEdgesChange,
        addNode,
        addCheckpoint,
        addLora,
        addCLIP,
        onConnect,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};
