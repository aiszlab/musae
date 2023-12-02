import React, { Key, useCallback, useEffect, useRef } from "react";
import { useTimeUnit } from "./hooks";
import { ColumnProps } from "./types";
import { Menu, MenuRef } from "../menu";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { useControlledState } from "@aiszlab/relax";

const Column = ({ unit, ...props }: ColumnProps) => {
  const timeUnit = useTimeUnit(unit);
  const classNames = useClassNames(ComponentToken.Clock);
  const [value, setValue] = useControlledState(props.value!);
  const ref = useRef<MenuRef>(null);

  const onClick = useCallback(
    (key: Key) => {
      setValue(key as number);
    },
    [setValue]
  );

  useEffect(() => {
    ref.current?.scrollTo(value, 100);
  }, [value]);

  return (
    <Menu
      selectedKeys={[value]}
      ref={ref}
      className={classNames[ClockClassToken.Column]}
      items={[...Array(timeUnit).keys()].map((step) => ({
        key: step,
        label: step < 10 ? `0${step}` : step.toString(),
      }))}
      onClick={onClick}
    />
  );
};

export default Column;
