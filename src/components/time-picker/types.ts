import type { Dayjs } from "dayjs";
import type { ComponentProps } from "../../types/element";

/**
 * @description
 * time picker props
 */
export interface TimePickerProps extends ComponentProps {
  /**
   * @description
   * value
   */
  value?: Dayjs;

  /**
   * @description
   * change handler
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
