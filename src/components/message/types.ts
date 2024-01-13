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
 * message props
 */
export interface MessageProps {
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
  add: (props: MessageProps) => void;
}
