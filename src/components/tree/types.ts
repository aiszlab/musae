import type { Key, ReactNode } from "react";
import type { ComponentProps, WithLevel } from "../../types/element";

/**
 * @description
 * tree node
 */
export type TreeNode = {
  /**
   * @description
   * key
   */
  key: Key;

  /**
   * @description
   * title
   */
  title: ReactNode;

  /**
   * @description
   * children
   */
  children?: TreeNode[];
};

/**
 * @description
 * tree props
 */
export type TreeProps = ComponentProps & {
  /**
   * @description
   * nodes
   */
  nodes: TreeNode[];

  /**
   * @description
   * expanded keys
   */
  expandedKeys?: Key[];

  /**
   * @description
   * expand handler
   */
  onExpand?: (keys: Key[]) => void;
};

/**
 * @description
 * tree node props
 */
export type TreeNodeProps = WithLevel<Omit<TreeNode, "children" | "key">> & {
  /**
   * @description
   * value
   */
  value: Key;

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * expand handler
   */
  onToggle?: (key: Key) => void;
};

/**
 * @description
 * tree list props
 */
export type TreeListProps = ComponentProps & {
  /**
   * @description
   * nodes
   */
  nodes?: TreeNode[];

  /**
   * @description
   * if this list is expanded
   */
  expanded?: boolean;

  /**
   * @description
   * current list display level
   */
  level?: number;
};

/**
 * @description
 * context value
 */
export type ContextValue = {
  /**
   * @description
   * checked keys
   */
  checkedKeys: Set<Key>;

  /**
   * @description
   * check
   */
  check?: (key: Key) => void;

  /**
   * @description
   * expandedKeys
   */
  expandedKeys: Set<Key>;

  /**
   * @description
   * toggle
   */
  toggle?: (key: Key) => void;
};

/**
 * @description
 * tree child render props
 */
export type TreeChildRenderProps = Pick<TreeNodeProps, Extract<keyof TreeNodeProps, keyof TreeListProps>> & {
  key: Key;
};
