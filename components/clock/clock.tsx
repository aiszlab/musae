import React, { ReactNode, useMemo } from "react";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import dayjs from "dayjs";
import { Menu } from "../menu";
import { StyledWrapper } from "./styled";

const Clock = () => {
  const classNames = useClassNames(ComponentToken.Clock);

  const menus = useMemo<[ReactNode, ReactNode, ReactNode]>(() => {
    return [
      <Menu
        className={classNames[ClockClassToken.Column]}
        items={[...Array(24).keys()].map((hour) => ({
          key: hour,
          label: hour.toString(),
        }))}
      />,
      <Menu
        className={classNames[ClockClassToken.Column]}
        items={[...Array(24).keys()].map((hour) => ({
          key: hour,
          label: hour.toString(),
        }))}
      />,
      <Menu
        className={classNames[ClockClassToken.Column]}
        items={[...Array(24).keys()].map((hour) => ({
          key: hour,
          label: hour.toString(),
        }))}
      />,
    ];
  }, [classNames]);

  return <StyledWrapper className={classNames[ClockClassToken.Clock]}>{menus}</StyledWrapper>;
};

export default Clock;
