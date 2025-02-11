import type { Dayjs } from "dayjs";
import type { ComponentProps } from "./element";

/**
 * @description
 * time picker props
 */
export interface TimePickerProps extends ComponentProps {
  /**
   * @description
   * value
   * @default void 0
   */
  value?: Dayjs;

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: Dayjs) => void;
}

/**
 * @description
 * panel props
 */
export type PanelProps = Pick<TimePickerProps, "value" | "onChange">;

/**
 * @description
 * panel ref
 */
export type PanelRef = {
  /**
   * @description
   * value reset handler
   */
  reset: () => void;
};
