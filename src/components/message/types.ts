import type { RequiredIn } from "@aiszlab/relax/types";
import type { ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

type Type = "success" | "error" | "info" | "warning" | "loading";
type Open = (content: string, duration?: number) => Promise<void>;

/**
 * @author murukal
 *
 * @description
 * messager
 */
export interface Messager {
  /**
   * @description
   * show success message
   */
  success: Open;

  /**
   * @description
   * show error message
   */
  error: Open;

  /**
   * @description
   * show info message
   */
  info: Open;

  /**
   * @description
   * show warning message
   */
  warning: Open;

  /**
   * @description
   * show loading message
   */
  loading: Open;

  /**
   * @description
   * show config message
   */
  open: (config: MessageConfig) => Promise<void>;
}

/**
 * @author murukal
 *
 * @description
 * message props
 */
export type MessageProps = ComponentProps & {
  /**
   * @description
   * message type
   */
  type: Type;

  /**
   * @description
   * message show times
   */
  duration?: number;

  /**
   * @description
   * close handler
   */
  onClose?: () => void;

  /**
   * @description
   * message content
   */
  children?: ReactNode;
};

/**
 * @description
 * message config
 */
export type MessageConfig = Omit<MessageProps, "onClose" | "children"> & {
  /**
   * @description
   * message key
   */
  key?: string;

  /**
   * @description
   * content
   */
  content: string;
};

/**
 * @author murukal
 *
 * @description
 * message ref
 */
export interface MessageRef {
  /**
   * @description
   * add handler
   */
  add: (props: RequiredIn<MessageConfig, "key">) => void;
}
