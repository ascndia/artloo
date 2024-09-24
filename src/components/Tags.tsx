import { useEffect, useState } from "react";
import { ActionIcon, Button, Group } from "@mantine/core";
import { Box } from "@chakra-ui/layout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type TagProps = { id: number; name: string };
export function TagScroller({
  data,
  value = [],
  onChange,
}: {
  data?: TagProps[];
  value?: number[];
  onChange?: (value: number[]) => void;
}) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const largerThanViewport = node && node.scrollWidth > node.offsetWidth;
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const scrollLeft = () => node?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => node?.scrollBy({ left: 200, behavior: "smooth" });

  const handleChange = (tagId: number, shouldAdd: boolean) => {
    const tags = [...value];
    const index = tags.findIndex((id) => id === tagId);
    if (shouldAdd) {
      if (index === -1) tags.push(tagId);
      else tags.splice(index, 1);
      onChange?.(tags);
    } else {
      if (index === -1 || tags.length > 1) onChange?.([tagId]);
      else onChange?.([]);
    }
  };

  useEffect(() => {
    if (!node) return;

    const listener = () => {
      const atStart = node?.scrollLeft === 0;
      const atEnd = node.scrollLeft >= node.scrollWidth - node.offsetWidth - 1;
      setAtStart(atStart);
      setAtEnd(atEnd);
    };

    listener();

    node.addEventListener("scroll", listener, { passive: true });
    return () => {
      node.removeEventListener("scroll", listener);
    };
  }, [node]);

  if (!data?.length) return null;
  const { theme } = useTheme();
  return (
    <div className={"relative"}>
      {/* <div className="absolute bg-red-400 right-[-120px]">
        {atStart && "atStart"},{atEnd && "atEnd"}
      </div> */}
      <Box
        className={cn(
          atStart && "!hidden",
          "hidden md:flex absolute h-full  items-center left-0  transform  pr-4 z-10 bg-gradient-to-r from-white to-transparent dark:from-black"
        )}
      >
        <ActionIcon variant="transparent" radius="xl" onClick={scrollLeft}>
          <ChevronLeft />
        </ActionIcon>
      </Box>
      <Group
        ref={setNode}
        className="overflow-x-auto my-3 gap-2 scrollbar-none flex-nowrap flex"
      >
        {data.map((tag) => {
          const active = value.includes(tag.id);
          return (
            <Button
              className="bg-neutral-100 px-2 py-1 rounded dark:bg-neutral-800  font-semibold"
              key={tag.id}
              variant={
                active ? "filled" : theme === "dark" ? "filled" : "light"
              }
              color={active ? "blue" : "gray"}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                const shouldAdd = e.ctrlKey;
                handleChange(tag.id, shouldAdd);
              }}
            >
              {tag.name}
            </Button>
          );
        })}
      </Group>
      <Box
        className={cn(
          (atEnd || !largerThanViewport) && "!hidden",
          "hidden md:flex !absolute h-full items-center  right-0 top-0 pl-4 z-10 bg-gradient-to-r to-white from-transparent dark:to-black"
        )}
      >
        <ActionIcon variant="transparent" radius="xl" onClick={scrollRight}>
          <ChevronRight />
        </ActionIcon>
      </Box>
    </div>
  );
}
