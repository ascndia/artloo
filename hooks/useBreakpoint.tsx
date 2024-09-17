import { useEffect } from "react";
// import { useEffect, useRef, useState } from "react";
// import useBreakpoint from "./useBreakpoint";

// export const useResponsive = (breakpoint = 768) => {
//   const ref = useRef(null);
//   const isBreakpoint = useBreakpoint(ref, breakpoint);
//   return { ref, isBreakpoint };
// };

import { create } from "zustand";

interface ResponsiveStore {
  ref: React.RefObject<HTMLElement> | null;
  isBreakpoint: boolean;
  setRef: (ref: React.RefObject<HTMLElement>) => void;
  setBreakpoint: (value: boolean) => void;
}
const useResponsive = create<ResponsiveStore>((set) => ({
  ref: null,
  isBreakpoint: false,
  setRef: (ref) => set({ ref }),
  setBreakpoint: (value) => set({ isBreakpoint: value }),
}));

const useBreakpoint = (
  ref?: React.RefObject<HTMLElement>,
  breakpoint: number = 768
) => {
  const { setRef, setBreakpoint, isBreakpoint } = useResponsive();

  useEffect(() => {
    if (ref) {
      setRef(ref);
    }
  }, [ref, setRef]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setBreakpoint(width < breakpoint);
      }
    });

    if (ref?.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref, breakpoint, setBreakpoint]);

  return isBreakpoint;
};

export default useBreakpoint;
