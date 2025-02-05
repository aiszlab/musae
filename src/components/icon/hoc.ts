import { type FC, createElement } from "react";
import type { AsProps, IconProps } from "../../types/icon";
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
