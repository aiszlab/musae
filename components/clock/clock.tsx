import React, { useRef } from "react";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { StyledClock } from "./styled";
import { ClockProps, TimeUnit } from "./types";
import Column from "./column";
import { Nullable } from "../../types/lib";

const Clock = ({ value, onChange }: ClockProps) => {
  const classNames = useClassNames(ComponentToken.Clock);
  const itemRefs = useRef<Nullable<{}>[]>([null, null, null]);

  return (
    <StyledClock className={classNames[ClockClassToken.Clock]}>
      {[TimeUnit.Hour, TimeUnit.Minute, TimeUnit.Second].map((unit, index) => {
        return (
          <Column
            unit={unit}
            key={unit}
            value={value?.[index]}
            ref={(item) => (itemRefs.current[index] = item)}
            onChange={(_value) => {
              onChange?.(Object.values({ ...[0, 0, 0], ...value, [index]: _value }) as Required<ClockProps>["value"]);
            }}
          />
        );
      })}
    </StyledClock>
  );
};

export default Clock;
