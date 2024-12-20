import type { TooltipProps } from "musae/types/tooltip";
import React from "react";
import { Popover } from "../popover";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names.component";
import { CLASS_NAMES } from "./context";

const Tooltip = ({ children, className, style, title }: TooltipProps) => {
  const classNames = useClassNames(CLASS_NAMES);

  // when `title` is invalid, use children only
  if (!title) {
    return children;
  }

  // `Tooltip` title is used into `Popover` content!!! not a bug!
  return (
    <Popover content={title} className={stringify(classNames.tooltip, className)} style={style}>
      {children}
    </Popover>
  );
};

export default Tooltip;
