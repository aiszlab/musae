import React, { type ReactNode, createElement, useMemo } from "react";
import { AsProps, IconProps } from "./types";
import { StyledIcon } from "./styled";
import { isFunction } from "@aiszlab/relax";
import { useTheme } from "../theme";
import { useClassNames } from "../config";
import { ComponentToken, IconClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { ColorToken } from "../../utils/colors";

const Icon = ({ as, color, size, onClick, className }: IconProps) => {
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Icon);
  const asProps = useMemo<AsProps>(() => {
    return {
      color: color ?? theme.colors[ColorToken.Primary],
      size: size ?? 20,
    };
  }, [color, size, theme]);

  const children = useMemo<ReactNode>(() => {
    if (isFunction(as)) {
      return createElement(as, asProps);
    }
    return as;
  }, [asProps, as]);

  return (
    <StyledIcon onClick={onClick} className={clsx(classNames[IconClassToken.Icon], className)} isClickable={!!onClick}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
