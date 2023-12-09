import { Key, ReactNode } from "react";

/**
 * @description
 * node
 */
type Node = {
  /**
   * @description
   * key
   */
  key: Key;

  /**
   * @description
   * label
   */
  label: ReactNode;

  /**
   * @description
   * children
   */
  children?: Node[];
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
  nodes?: Node[];
};
