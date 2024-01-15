import React, { CSSProperties, useCallback, useContext, useEffect, useState } from "react";
import { Clock } from "../clock";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import { Button } from "../button";
import { PanelProps } from "./types";
import Context from "../picker/context";
import { ClockProps } from "../clock/types";
import dayjs from "dayjs";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  panel: (borderTopColor: Required<CSSProperties>["borderTopColor"]) => ({
    borderWidth: "1px",
    borderStyle: "solid",
    borderTopColor,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: 4,
    paddingInline: 12,
    minHeight: 40,
  }),
});

const Panel = (props: PanelProps) => {
  const classNames = useClassNames(ComponentToken.TimePicker);
  const { isVisible } = useContext(Context);
  const [value, setValue] = useState<ClockProps["value"]>();
  const theme = useTheme();

  useEffect(() => {
    if (!isVisible || !props.value) {
      setValue(void 0);
      return;
    }
    setValue([props.value.hour(), props.value.minute(), props.value.second()]);
  }, [props.value, isVisible]);

  const change = useCallback<Required<ClockProps>["onChange"]>((value) => {
    setValue(value);
  }, []);

  const confirm = useCallback(() => {
    if (!value) return;
    props.onChange?.(dayjs().hour(value[0]).minute(value[1]).second(value[2]));
  }, [props, value]);

  const reset = useCallback(() => {
    const currentAt = dayjs();
    setValue([currentAt.hour(), currentAt.minute(), currentAt.second()]);
  }, []);

  const styled = stylex.props(styles.panel(theme.colors[ColorToken.OutlineVariant]));

  return (
    <div className={clsx(classNames[TimePickerClassToken.Panel], styled.className)} style={styled.style}>
      <Clock value={value} onChange={change} />

      <div className={classNames[TimePickerClassToken.PanelFooter]}>
        <Button variant="text" size="small" onClick={reset}>
          此刻
        </Button>
        <Button variant="filled" size="small" onClick={confirm} disabled={!value}>
          确定
        </Button>
      </div>
    </div>
  );
};

export default Panel;
