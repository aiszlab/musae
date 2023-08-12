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
  key: string;
  type: "error" | "success" | "warning";
  duration: number;
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
