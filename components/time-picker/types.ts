import type { Dayjs } from "dayjs";
import type { ComponentProps } from "../../types/element";
import { ClockProps } from "../clock/types";

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

export type PanelProps = Pick<ClockProps, "value">;
