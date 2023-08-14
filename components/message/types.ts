import { Attributes } from "react";

/**
 * @author murukal
 *
 * @description
 * messager
 */
export interface Messager {
  error: UnderlyingSinkCloseCallback;
}

/**
 * @author murukal
 *
 * @description
 * props for message
 */
export interface Props {
  id: string;
  type: "error" | "success" | "warning";
  duration: number;

  /// callbacks
  onHidden?: (key: string) => void;
}

/**
 * @author murukal
 *
 * @description
 * message ref
 */
export interface MessageRef {
  add: (props: Props) => void;
}
