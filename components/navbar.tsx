import React from "react";
import { HeaderComponent } from "./header";
import { SubHeaderComponent } from "./sub-header";

export default function Navbar() {
  return (
    <div className="sticky z-50 top-0 w-full">
      <HeaderComponent />
      <SubHeaderComponent />
    </div>
  );
}
