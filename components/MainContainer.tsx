"use client";

import { useNotificationStore } from "@/state/notification";
import { useEffect, useRef } from "react";
import { Container } from "./Container";

export default function MainContainer({
  children,
  ...rest
}: React.PropsWithChildren<{}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const setContainerRef = useNotificationStore(
    (state) => state.setContainerRef
  );

  useEffect(() => {
    if (containerRef.current) {
      setContainerRef(containerRef); // Only set the ref if it exists
    }
  }, [setContainerRef]); // Add setContainerRef to the dependency array

  return (
    <Container ref={containerRef} {...rest}>
      {children}
    </Container>
  );
}
