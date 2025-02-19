import { type ReactNode, Children, isValidElement, ReactElement, useMemo } from "react";
import type { ComponentProps } from "../../types/element";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Main from "./main";
import Heading from "./heading";

/**
 * @description
 * children node
 */
export const useChildren = ({ children }: { children: ReactNode }) => {
  const _children = useMemo(() => {
    return Children.toArray(children).reduce((prev, child) => {
      if (!isValidElement(child)) {
        return prev;
      }

      switch (child.type) {
        case Header:
        case Sidebar:
        case Footer:
        case Main:
        case Heading:
          prev.set(child.type, child);
          break;
        default:
          break;
      }

      return prev;
    }, new WeakMap<Function, ReactElement>());
  }, [children]);

  const { gridTemplateAreas, hasFooter, hasHeading, hasSidebar } = useMemo(() => {
    const hasHeading = _children.has(Heading);
    const hasSidebar = _children.has(Sidebar);
    const hasFooter = _children.has(Footer);

    const _gridTemplateAreas = [
      [hasHeading ? "heading" : "header", "header"],
      [hasSidebar ? "sidebar" : "main", "main"],
      [hasSidebar ? "sidebar" : hasFooter ? "footer" : "main", hasFooter ? "footer" : "main"],
    ];

    return {
      hasFooter,
      hasHeading,
      hasSidebar,
      gridTemplateAreas: `'${_gridTemplateAreas.map((row) => row.join(" ")).join("' '")}'`,
    };
  }, [_children]);

  return {
    children: _children,
    gridTemplateAreas,
    hasFooter,
    hasHeading,
    hasSidebar,
  };
};
