import type { Key, ReactNode } from "react";
import type { WithId, WithLevel } from "../../types/element";

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
};

/**
 * @description
 * tree list props
 */
export type TreeListProps = WithLevel<TreeProps>;

/**
 * @description
 * tree node props
 */
export type TreeNodeProps = WithLevel<WithId<Omit<TreeNode, "children">>> & {
  children: ReactNode;
};

/**
 * @description
 * tree node render props
 */
export type TreeNodeRenderProps = WithLevel<{
  isSelected: boolean;
}>;

/**
 * @description
 * context value
 */
export type ContextValue = {
  /**
   * @description
   * selected keys
   */
  selectedKeys: Map<Key, true>;

  /**
   * @description
   * select
   */
  select?: (key: Key) => void;
};
