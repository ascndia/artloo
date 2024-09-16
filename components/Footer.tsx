import React from "react";
import { Container } from "./components-ui-container";

export default function Footer() {
  return (
    <div className="flex items-center bg-background justify-start w-full h-10 border-t">
      <Container size="full">
        <div className="font-bold ">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </Container>
    </div>
  );
}
