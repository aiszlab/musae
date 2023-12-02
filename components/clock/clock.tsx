import React from "react";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { StyledClock } from "./styled";
import { TimeUnit } from "./types";
import Column from "./column";

const Clock = () => {
  const classNames = useClassNames(ComponentToken.Clock);

  return (
    <StyledClock className={classNames[ClockClassToken.Clock]}>
      {[TimeUnit.Hour, TimeUnit.Minute, TimeUnit.Second].map((unit) => {
        return <Column unit={unit} key={unit} value={0} />;
      })}
    </StyledClock>
  );
};

export default Clock;
