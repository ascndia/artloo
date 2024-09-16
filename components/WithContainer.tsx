import React from "react";
import { Container, ContainerProps } from "./components-ui-container";

export default function WithContainer({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & ContainerProps) {
  return <Container {...rest}>{children}</Container>;
}
