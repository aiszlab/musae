import React, { ReactNode, createElement, useMemo } from "react";
import { AsProps, IconProps } from "./types";
import { StyledIcon } from "./styled";
import { isFunction } from "@aiszlab/relax";
import { useTheme } from "..";

const Icon = ({ as, color, size, onClick }: IconProps) => {
  const theme = useTheme();
  const asProps = useMemo<AsProps>(() => {
    return {
      color: color ?? theme.colorRole.primary,
      size: size ?? 20,
    };
  }, [color, size, theme]);

  const children = useMemo<ReactNode>(() => {
    if (isFunction(as)) {
      return createElement(as, asProps);
    }
    return as;
  }, [asProps, as]);

  return <StyledIcon onClick={onClick}>{children}</StyledIcon>;
};

export default Icon;
