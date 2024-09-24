"use client";

import {
  MasonryScroller,
  MasonryScrollerProps,
  RenderComponentProps,
  useContainerPosition,
  usePositioner,
  useResizeObserver,
} from "masonic";
import { useTheme } from "next-themes";
import { ComponentType, useRef } from "react";
import { useWindowSize } from "@react-hook/window-size";

export function MasonryGrid<T>({
  items,
  render,
  maxColumnCount = 4,
  columnWidth = 1200 / maxColumnCount,
  columnGutter,
  filters,
  //   isRefetching,
  //   isFetchingNextPage,
  ...props
}: Props<T>) {
  const counterRef = useRef(0);
  const theme = useTheme();
  const masonryRef = useRef(null);
  //   const { width, height } = useViewportSize();
  //   const { offset, width: containerWidth } = useContainerPosition(masonryRef, [
  //     width,
  //     height,
  //   ]);
  // when add/edit/delete
  //   const positioner = usePositioner(
  //     {
  //       width: containerWidth,
  //       maxColumnCount: maxColumnCount,
  //       columnWidth: columnWidth,
  //       columnGutter: columnGutter,
  //     },
  //     [counterRef.current]
  //   );
  const [windowWidth, windowHeight] = useWindowSize();
  const { offset, width } = useContainerPosition(masonryRef, [
    windowWidth,
    windowHeight,
  ]);
  const positioner = usePositioner({
    width,
    columnGutter: 8,
    columnWidth: 320,
  });
  const resizeObserver = useResizeObserver(positioner);
  return (
    <MasonryScroller
      containerRef={masonryRef}
      positioner={positioner}
      resizeObserver={resizeObserver}
      overscanBy={10}
      offset={offset}
      height={windowWidth}
      items={items}
      render={render}
      {...props}
    />
  );
}

type Props<T> = Omit<
  MasonryScrollerProps<T>,
  "containerRef" | "positioner" | "resizeObserver" | "offset" | "height"
> & {
  maxColumnCount?: number;
  columnWidth?: number;
  columnGutter?: number;
  filters?: Record<string, unknown>;
  //   previousFetching?: boolean;
  //   isRefetching: boolean;
  //   isFetchingNextPage: boolean;
};
