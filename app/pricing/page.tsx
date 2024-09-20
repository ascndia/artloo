import Pricing from "@/components/pricing";
import WithContainer from "@/components/WithContainer";
import dynamic from "next/dynamic";
import React from "react";

const FixedLayout = dynamic(() => import("@/components/FixedLayout"), {
  ssr: false,
});

export default function page() {
  return (
    <FixedLayout>
      <WithContainer>
        <Pricing />
      </WithContainer>
    </FixedLayout>
  );
}
