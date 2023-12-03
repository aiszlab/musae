import React, { Key, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import { useTimeUnit } from "./hooks";
import { ColumnProps } from "./types";
import { Menu, MenuRef } from "../menu";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { isVoid } from "@aiszlab/relax";

const Column = forwardRef<{}, ColumnProps>(({ unit, value, onChange }, ref) => {
  const timeUnit = useTimeUnit(unit);
  const classNames = useClassNames(ComponentToken.Clock);
  const menuRef = useRef<MenuRef>(null);

  const onClick = useCallback(
    (key: Key) => {
      onChange?.(key as number);
      menuRef.current?.scrollTo(key, 100);
    },
    [onChange]
  );

  useImperativeHandle(ref, () => ({}), []);

  useEffect(() => {
    if (isVoid(value)) return;
    menuRef.current?.scrollTo(value || 0, 100);
  }, [value]);

  const selectedKeys = useMemo(() => {
    if (isVoid(value)) return void 0;
    return [value];
  }, [value]);

  return (
    <Menu
      selectedKeys={selectedKeys}
      ref={menuRef}
      className={classNames[ClockClassToken.Column]}
      items={[...Array(timeUnit).keys()].map((step) => ({
        key: step,
        label: step < 10 ? `0${step}` : step.toString(),
      }))}
      onClick={onClick}
    />
  );
});

export default Column;
