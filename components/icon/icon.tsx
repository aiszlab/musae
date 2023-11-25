import React, { ReactNode, createElement, useMemo } from "react";
import { AsProps, IconProps } from "./types";
import { StyledIcon } from "./styled";

const Icon = (props: IconProps) => {
  const asProps = useMemo<AsProps>(() => {
    return {};
  }, [props.color, props.size]);

  const children = useMemo<ReactNode>(() => {
    if (React.isValidElement(props.as)) {
      return createElement(props.as, asProps);
    }

    return props.as;
  }, [props.as]);

  return <StyledIcon>{children}</StyledIcon>;
};

export default Icon;
