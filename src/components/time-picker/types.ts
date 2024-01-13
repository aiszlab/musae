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

export type PanelProps = Pick<TimePickerProps, "value" | "onChange">;
