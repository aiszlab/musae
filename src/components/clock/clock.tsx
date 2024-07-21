import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import type { ClockProps } from "./types";
import { TimeUnit } from "./types";
import Column from "./column";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { Divider } from "../divider";
import { spacing } from "../theme/tokens.stylex";

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
  const columns = [TimeUnit.Hour, TimeUnit.Minute, TimeUnit.Second];

  return (
    <div className={clsx(classNames[ClockClassToken.Clock], styled.className)} style={styled.style}>
      {columns.map((unit, index) => {
        return [
          <Column
            unit={unit}
            key={unit}
            value={value?.[index]}
            onChange={(_value) => {
              onChange?.(Object.values({ ...[0, 0, 0], ...value, [index]: _value }) as Required<ClockProps>["value"]);
            }}
          />,
          index === columns.length - 1 ? null : <Divider type="vertical" key={`${unit}-divider`} />,
        ];
      })}
    </div>
  );
};

export default Clock;
