import { FC, createElement } from "react";
import { AsProps } from "./types";
import Icon from "./icon";

/**
 * @description
 * with icon
 */
export const withIcon = (as: FC<AsProps>) => {
  return (props: Partial<AsProps>) => {
    return createElement(Icon, {
      ...props,
      as,
    });
  };
};
