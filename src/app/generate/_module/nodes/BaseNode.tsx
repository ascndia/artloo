import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Box, Flex } from "@chakra-ui/layout";
import {
  NodeProps,
  NodeResizer,
  NodeResizerProps,
  useReactFlow,
} from "@xyflow/react";
import { Edit, Ellipsis, Eye, EyeOff, Trash } from "lucide-react";
import React, { useRef } from "react";
import { useFlowContext } from "../FlowProvider";

export default function BaseNode({
  label,
  className,
  children,
  isVisible,
  ...props
}: {
  label: string;
  className?: string;
  children?: React.ReactNode;
  isVisible?: boolean;
  resizer?: NodeResizerProps;
} & NodeProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = React.useState(false);
  const { onNodesDelete } = useFlowContext();
  const { setNodes } = useReactFlow();
  const onDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== props.id));
  };
  return (
    <>
      <NodeResizer
        minHeight={boxRef.current?.clientHeight}
        minWidth={boxRef.current?.clientWidth}
        isVisible={isVisible}
      />
      <Box h={"100%"} ref={boxRef} className={cn("rounded-md", className)}>
        <Flex direction={"column"}>
          <Flex className="border-foreground items-center justify-between border-b p-2">
            <Label className="">{label}</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="!bg-transparent" variant="ghost" size="sm">
                  <Ellipsis className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {hidden ? (
                  <DropdownMenuItem onClick={() => setHidden(!hidden)}>
                    <EyeOff className="mr-2 h-4 w-4" />
                    Hide
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={() => setHidden(!hidden)}>
                    <Eye className="mr-2 h-4 w-4" />
                    Show
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={onDelete}>
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Flex>
          <Flex
            w={"full"}
            direction={"column"}
            className={hidden ? "hidden" : ""}
          >
            {children}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
