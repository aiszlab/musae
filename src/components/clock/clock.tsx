import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { ClockClassToken } from "../../utils/class-name";
import type { ClockProps, TimeUnit } from "musae/types/clock";
import Column from "./column";
import stylex from "@stylexjs/stylex";
import { clsx } from "@aiszlab/relax";
import { Divider } from "../divider";
import { spacing } from "../theme/tokens.stylex";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  clock: {
    display: "flex",
    height: 200,
    columnGap: spacing.xxsmall,
  },
});

const Clock = ({ value, onChange }: ClockProps) => {
  const classNames = useClassNames(ComponentToken.Clock);
  const styled = stylex.props(styles.clock);
  const columns = ["hour", "minute", "second"] satisfies TimeUnit[];

  return (
    <div className={clsx(classNames[ClockClassToken.Clock], styled.className)} style={styled.style}>
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
