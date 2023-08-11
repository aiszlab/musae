/**
 * @author murukal
 * @description messager
 */
export interface Messager {}

/**
 * @author murukal
 * @description props for message
 */
export interface Props {
  type: "error" | "success" | "warning";
  duration: number;
}

/**
 * @author murukal
 * @description message ref
 */
export interface MessageRef {
  add: (props: Props) => void;
}
