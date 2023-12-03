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
}

export type PanelProps = Pick<TimePickerProps, "value">;
