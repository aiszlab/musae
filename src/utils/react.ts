import { isBoolean, isNull, isUndefined } from "@aiszlab/relax";
import { Partialable } from "@aiszlab/relax/types";
import { Children, Fragment, isValidElement, type ReactNode } from "react";

interface ElementProps {
  children?: ReactNode;
}

/**
 * @zh 获取组件子节点中的文本
 * @en Get text from component children
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

/**
 * @zh 判断节点是否包含可渲染内容
 * @en Determine whether a node contains renderable content
 */
export const hasRenderableContent = (content: ReactNode): boolean => {
  if (isNull(content) || isUndefined(content) || isBoolean(content) || content === "") {
    return false;
  }

  return Children.toArray(content).some((child) => {
    if (isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment) {
      return hasRenderableContent(child.props.children);
    }

    return child !== "";
  });
};
