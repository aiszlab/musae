import React from "react";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { ClockProps, TimeUnit } from "./types";
import Column from "./column";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";

const styles = stylex.create({
  clock: {
    display: "flex",
    maxHeight: 200,
  },
});

const Clock = ({ value, onChange }: ClockProps) => {
  const classNames = useClassNames(ComponentToken.Clock);

  const styled = stylex.props(styles.clock);

  return (
    <div className={clsx(styled.className, classNames[ClockClassToken.Clock])} style={styled.style}>
      {[TimeUnit.Hour, TimeUnit.Minute, TimeUnit.Second].map((unit, index) => {
        return (
          <Column
            unit={unit}
            key={unit}
            value={value?.[index]}
            onChange={(_value) => {
              onChange?.(Object.values({ ...[0, 0, 0], ...value, [index]: _value }) as Required<ClockProps>["value"]);
            }}
          />
        );
      })}
    </div>
  );
};

export default Clock;
