import React, { ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { Menu } from "../menu";
import { StyledWrapper } from "./styled";
import { Time, TimeType } from "./types";
import { MenuRef } from "../menu";

const Clock = () => {
  const classNames = useClassNames(ComponentToken.Clock);
  const value = useState<[number, number, number]>([0, 0, 0]);
  const refs = useRef(new Map<TimeType, MenuRef | null>());

  useLayoutEffect(() => {
    refs.current.get(TimeType.Minute)?.scrollTo(1);
  }, []);

  const menus = useMemo<ReactNode[]>(() => {
    const _times: Time = {
      [TimeType.Hour]: 24,
      [TimeType.Minute]: 60,
      [TimeType.Second]: 60,
    };

    return Object.entries(_times).map(([key, value]) => {
      return (
        <Menu
          ref={(_ref) => refs.current.set(key as TimeType, _ref)}
          key={key}
          className={classNames[ClockClassToken.Column]}
          items={[...Array(value).keys()].map((step) => ({
            key: step,
            label: step < 10 ? `0${step}` : step.toString(),
          }))}
        />
      );
    });
  }, [classNames]);

  return <StyledWrapper className={classNames[ClockClassToken.Clock]}>{menus}</StyledWrapper>;
};

export default Clock;
