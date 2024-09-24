import { forwardRef, PropsWithChildren } from "react";
import { Card } from "../ui/card";

type MasonryCardProps = {
  height?: number;
  uniform?: boolean;
  className: string;
};

// TODO - when children not in view, replace child react nodes with static html
export const MasonryCard = forwardRef<
  HTMLDivElement,
  MasonryCardProps & PropsWithChildren
>(({ height, children, uniform, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className}>
      <div>
        <Card style={{ height }} className={className} {...props}>
          {children}
        </Card>
      </div>
    </div>
  );
});
