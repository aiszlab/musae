import type { Key, ReactNode } from "react";
import type { ComponentProps } from "./element";

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
   * default expanded keys
   * @default []
   */
  defaultExpandedKeys?: Key[];

  /**
   * @description
   * expand handler
   * @default void 0
   */
  onExpand?: (keys: Key[]) => void;

  /**
   * @description
   * selectable
   * @default true
   */
  selectable?: boolean;

  /**
   * @description
   * selected keys
   * @default void 0
   */
  selectedKeys?: Key[];

  /**
   * @description
   * default selected keys
   * @default []
   */
  defaultSelectedKeys?: Key[];

  /**
   * @description
   * select handler
   * @default void 0
   */
  onSelect?: (key: Key) => void;

  /**
   * @description
   * checked keys
   * @default void 0
   */
  checkedKeys?: Key[];

  /**
   * @description
   * default checked keys
   * @default []
   */
  defaultCheckedKeys?: Key[];

  /**
   * @description
   * check handler
   * @default void 0
   */
  onCheck?: (keys: Key[]) => void;
};

/**
 * @description
 * tree node props
 */
export type TreeNodeProps = Omit<TreeNode, "children" | "key"> & {
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

  /**
   * @description
   * level
   */
  level: number;
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
  selectable: boolean;
};

/**
 * @description
 * tree child render props
 */
export type TreeChildRenderProps = Pick<
  TreeNodeProps,
  Extract<keyof TreeNodeProps, keyof TreeListProps>
> & {
  key: Key;
};
