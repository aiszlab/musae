export enum TimeUnit {
  Hour = "hour",
  Minute = "minute",
  Second = "second",
}

type Value = [number, number, number];

/**
 * @description
 * clock props
 */
export interface ClockProps {
  /**
   * @description
   * value
   */
  value?: Value;

  /**
   * @description
   * change handler
   */
  onChange?: (value: Value) => void;
}

/**
 * @description
 * column props
 */
export interface ColumnProps {
  /**
   * @description
   * value
   */
  value: number;

  /**
   * @description
   * unit
   */
  unit: TimeUnit;

  /**
   * @description
   * change handler
   */
  onChange?: (value: number) => void;
}
