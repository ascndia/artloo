import React from "react";

function SectionDivider({ children }: { children?: React.ReactNode }) {
  return <div className="min-h-56 w-full bg-foreground/5">{children}</div>;
}

export default SectionDivider;
