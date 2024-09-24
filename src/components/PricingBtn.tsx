import React from "react";
import { BgAnimateButton } from "./ui/animated-button";

type Gradients =
  | "sunrise"
  | "ocean"
  | "candy"
  | "default"
  | "forest"
  | "sunset"
  | "nebula";

type Radius = "full" | "xl" | "2xl" | "3xl" | "sm";
type Animations = "spin" | "pulse" | "spin-slow" | "spin-fast";

const gradients: Gradients[] = [
  "sunrise",
  "ocean",
  "candy",
  "forest",
  "sunset",
  "default",
  "nebula",
];
const roundings: Radius[] = ["full", "xl", "2xl", "3xl", "sm"];
const animations: Animations[] = ["spin", "pulse", "spin-slow", "spin-fast"];

export default function PricingBtn() {
  return (
    <BgAnimateButton animation="spin-fast" gradient="sunset">
      Pricing
    </BgAnimateButton>
  );
}
