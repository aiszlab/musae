import { FC, createElement } from "react";
import { AsProps, IconProps } from "./types";
import Icon from "./icon";

/**
 * @description
 * with icon
 */
export const withIcon = (as: FC<AsProps>) => {
  return (props: Omit<IconProps, "as">) => {
    return createElement(Icon, {
      ...props,
      as,
    });
  };
};
