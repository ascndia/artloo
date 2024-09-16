import FixedLayout from "@/components/FixedLayout";
import Pricing from "@/components/pricing";
import WithContainer from "@/components/WithContainer";
import React from "react";

export default function page() {
  return (
    <FixedLayout>
      <WithContainer>
        <Pricing />
      </WithContainer>
    </FixedLayout>
  );
}
