import React from "react";
import { Container, ContainerProps } from "./Container";

export default function WithContainer({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & ContainerProps) {
  return <Container {...rest}>{children}</Container>;
}
