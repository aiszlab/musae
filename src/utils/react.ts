import { Partialable } from "@aiszlab/relax/types";
import { Children, isValidElement, type ReactNode } from "react";

interface ElementProps {
  children?: ReactNode;
}

/**
 * @description
 * get the string of component children
 */
export const toReactNodeText = (children: ReactNode): Partialable<string> => {
  const _children = Children.toArray(children);

  for (const child of _children) {
    if (typeof child === "string" || typeof child === "number") {
      return child.toString();
    }

    if (isValidElement<ElementProps>(child)) {
      const textInChild = toReactNodeText(child.props.children);

      if (textInChild) {
        return textInChild;
      }
    }
  }
};
