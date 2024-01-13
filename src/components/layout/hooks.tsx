import { Children, ReactNode, isValidElement, useMemo } from "react";
import Header from "./header";
import Sider from "./sider";
import Footer from "./footer";

enum ChildToken {
  Header = "header",
  Sider = "sider",
  Footer = "footer",
  Main = "main",
}

interface GroupedChildren {
  [ChildToken.Header]: ReactNode;
  [ChildToken.Sider]: ReactNode;
  [ChildToken.Footer]: ReactNode;
  [ChildToken.Main]: ReactNode[];
}

/**
 * @description
 * children node
 */
export const useChildren = ([children]: [ReactNode]) => {
  const _children = useMemo(() => Children.toArray(children), [children]);

  return useMemo(() => {
    return _children.reduce<GroupedChildren>(
      (prev, current) => {
        if (isValidElement(current)) {
          if (current.type === Header) {
            prev[ChildToken.Header] = current;
          } else if (current.type === Sider) {
            prev[ChildToken.Sider] = current;
          } else if (current.type === Footer) {
            prev[ChildToken.Footer] = current;
          } else {
            prev[ChildToken.Main].push(current);
          }
        } else {
          prev[ChildToken.Main].push(current);
        }

        return prev;
      },
      {
        [ChildToken.Header]: null,
        [ChildToken.Sider]: null,
        [ChildToken.Footer]: null,
        [ChildToken.Main]: [],
      }
    );
  }, [_children]);
};
