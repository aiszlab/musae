import React, { ReactNode, useMemo } from "react";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { Menu } from "../menu";
import { StyledWrapper } from "./styled";
import { Time, TimeType } from "./types";

const Clock = () => {
  const classNames = useClassNames(ComponentToken.Clock);

  const menus = useMemo<ReactNode[]>(() => {
    const _times: Time = {
      [TimeType.Hour]: 24,
      [TimeType.Minute]: 60,
      [TimeType.Second]: 60,
    };

    return Object.entries(_times).map(([key, value]) => {
      return (
        <Menu
          key={key}
          className={classNames[ClockClassToken.Column]}
          items={[...Array(value).keys()].map((step) => ({
            key: step,
            label: step.toString(),
          }))}
        />
      );
    });
  }, [classNames]);

  return <StyledWrapper className={classNames[ClockClassToken.Clock]}>{menus}</StyledWrapper>;
};

export default Clock;
