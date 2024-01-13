/**
 * @author murukal
 *
 * @description
 * switch props
 */
export interface Props {
  /* value */
  value?: boolean;

  /* handler after change */
  onChange?: (value: boolean) => void | PromiseLike<void>;
}
