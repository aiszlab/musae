import { TooltipProps } from "./types";
import React from "react";
import { Popover } from "../popover";
import { useClassNames } from "../../hooks/use-class-names";
import { TooltipClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { ComponentToken } from "../../utils/component-token";

const Tooltip = ({ children, className, style, title }: TooltipProps) => {
  const classNames = useClassNames(ComponentToken.Tooltip);

  // `Tooltip` title is used into `Popover` content!!! not a bug!
  return (
    <Popover
      content={title}
      className={clsx(classNames[TooltipClassToken.Tooltip], className)}
      style={style}
    >
      {children}
    </Popover>
  );
};

export default Tooltip;
