export enum TimeUnit {
  Hour = "hour",
  Minute = "minute",
  Second = "second",
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
}
