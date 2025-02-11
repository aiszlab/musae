import { type ReactNode, Children, isValidElement, useMemo } from "react";
import type { ComponentProps } from "../../types/element";
import Header from "./header";
import Sider from "./sider";
import Footer from "./footer";
import Main from "./main";

export enum ChildToken {
  Header = "header",
  Sider = "sider",
  Footer = "footer",
  Main = "main",
}

/**
 * @description
 * children node
 */
export const useChildren = ([children]: [ReactNode]) => {
  const _children = useMemo(() => Children.toArray(children), [children]);

  const [groupedChildren, mainProps] = useMemo(() => {
    return _children.reduce<[Map<ChildToken, ReactNode>, ComponentProps]>(
      (prev, current) => {
        // invalid element, just ignore
        if (!isValidElement<ComponentProps>(current)) return prev;

        // valid element, check which type
        switch (current.type) {
          case Header:
            prev[0].set(ChildToken.Header, current);
            break;
          case Sider:
            prev[0].set(ChildToken.Sider, current);
            break;
          case Footer:
            prev[0].set(ChildToken.Footer, current);
            break;
          case Main:
            prev[0].set(ChildToken.Main, current);
            prev[1] = {
              className: current.props.className,
              style: current.props.style,
            };
            break;
        }

        return prev;
      },
      [new Map(), {}],
    );
  }, [_children]);

  return {
    children: groupedChildren,
    mainProps,
  };
};
