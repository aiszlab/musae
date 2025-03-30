import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import type { ClockProps, TimeUnit } from "../../types/clock";
import Column from "./column";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { Divider } from "../divider";
import { spacing } from "../theme/tokens.stylex";
import { CLASS_NAMES, Context } from "./context";

const styles = $create({
  clock: {
    display: "flex",
    height: 200,
    columnGap: spacing.xxxxxsmall,
  },
});

const Clock = ({ value, onChange, className, style }: ClockProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(styles.clock);
  const columns = ["hour", "minute", "second"] satisfies TimeUnit[];

  return (
    <Context.Provider value={{ classNames }}>
      <div
        className={stringify(classNames.clock, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
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
    </Context.Provider>
  );
};

export default Clock;
