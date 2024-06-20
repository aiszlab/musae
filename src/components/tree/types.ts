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
   * @default []
   */
  nodes: TreeNode[];

  /**
   * @description
   * expanded keys
   * @default void 0
   */
  expandedKeys?: Key[];

  /**
   * @description
   * expand handler
   * @default void 0
   */
  onExpand?: (keys: Key[]) => void;

  // TODO add to docs
  /**
   * @description
   * selectable
   * @default true
   */
  selectable?: boolean;

  // TODO add to docs
  /**
   * @description
   * selected keys
   * @default void 0
   */
  selectedKeys?: Key[];
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
  onExpand?: (key: Key) => void;
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

export type ContextValue = {
  /* check */
  checkedKeys: Set<Key>;
  onCheck?: (key: Key) => void;

  /* expand */
  expandedKeys: Set<Key>;
  onExpand?: (key: Key) => void;

  /* select */
  selectedKeys: Set<Key>;
  onSelect?: (key: Key) => void;
};

/**
 * @description
 * tree child render props
 */
export type TreeChildRenderProps = Pick<TreeNodeProps, Extract<keyof TreeNodeProps, keyof TreeListProps>> & {
  key: Key;
};
