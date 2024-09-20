import { Node } from "@xyflow/react";
import { KSamplerType } from "./nodes/custom/KSamplerNode";

export const createKSamplerNode = (): KSamplerType => {
  return {
    seed: -1,
    CFG: 7,
    step: 32,
    sampler: "k_lms",
    denoise: 0.5,
    scheduler: "normal",
  };
};
