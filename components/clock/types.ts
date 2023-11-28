export enum TimeType {
  Hour = "hour",
  Minute = "minute",
  Second = "second",
}

/**
 * @description
 * time type
 */
export type Time = {
  [TimeType.Hour]: number;
  [TimeType.Minute]: number;
  [TimeType.Second]: number;
};
