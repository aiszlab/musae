import type { Key, ReactNode, RefObject } from "react";
import type { WithId, WithLevel } from "../../types/element";

export type ExpandHandler = (key: Key) => void;

/**
 * @description
 * tree node
 */
type TreeNode = {
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
export type TreeProps = {
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
 * tree list props
 */
export type TreeListProps = WithLevel<Pick<TreeProps, "nodes">>;

/**
 * @description
 * tree node props
 */
export type TreeNodeProps = WithLevel<WithId<Omit<TreeNode, "children">>> & {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * list ref
   */
  listRef: RefObject<ListRef>;
};

/**
 * @description
 * tree node render props
 */
export type TreeNodeRenderProps = WithLevel<{
  /**
   * @description
   * is selected
   */
  isSelected: boolean;

  /**
   * @description
   * is expanded
   */
  isExpanded: boolean;

  /**
   * @description
   * default expanded
   */
  isDefaultExpanded: boolean;
}>;

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
   * expand
   */
  expand?: ExpandHandler;
};

/**
 * @description
 * menu ref
 */
export type ListRef = {
  /**
   * @description
   * expand
   */
  expand: (isExpanded: boolean) => void;
};
