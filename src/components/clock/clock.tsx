import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { ClockClassToken } from "../../utils/class-name";
import type { ClockProps, TimeUnit } from "musae/types/clock";
import Column from "./column";
import stylex from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { Divider } from "../divider";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  clock: {
    display: "flex",
    height: 200,
    columnGap: spacing.xxxsmall,
  },
});

const Clock = ({ value, onChange }: ClockProps) => {
  const classNames = useClassNames("clock");
  const styled = stylex.props(styles.clock);
  const columns = ["hour", "minute", "second"] satisfies TimeUnit[];

  return (
    <div
      className={stringify(classNames[ClockClassToken.Clock], styled.className)}
      style={styled.style}
    >
      {columns.map((unit, index) => {
        return [
          <Column
            unit={unit}
            key={unit}
            value={value?.[index]}
            onChange={(_value) => {
              onChange?.(
                Object.values({
                  ...[0, 0, 0],
                  ...value,
                  [index]: _value,
                }) as Required<ClockProps>["value"],
              );
            }}
          />,
          index === columns.length - 1 ? null : (
            <Divider orientation="vertical" key={`${unit}-divider`} />
          ),
        ];
      })}
    </div>
  );
};

export default Clock;
