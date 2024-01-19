import React, {
  CSSProperties,
  Key,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { useTimeUnit } from "./hooks";
import { ColumnProps } from "./types";
import { Menu, MenuRef } from "../menu";
import { useClassNames } from "../config";
import { ClockClassToken, ComponentToken } from "../../utils/class-name";
import { isVoid } from "@aiszlab/relax";
import { stylex } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  column: (scrollbarThumbColor: CSSProperties["backgroundColor"], dividerColor: CSSProperties["borderLeftColor"]) => ({
    overflowY: {
      default: "hidden",
      ":hover": "auto",
    },
    overflowX: "hidden",
    width: `calc(${spacing.xxsmall} + ${sizes.xlarge} * 2)`,
    marginBlock: spacing.xxsmall,

    "::-webkit-scrollbar": {
      width: spacing.small,
      backgroundColor: "transparent",
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      backgroundColor: scrollbarThumbColor,
    },

    ":not(:first-of-type)": {
      borderLeftWidth: "1px",
      borderLeftStyle: "solid",
      borderLeftColor: dividerColor,
    },
  }),
});

const Column = forwardRef<{}, ColumnProps>(({ unit, value, onChange }, ref) => {
  const timeUnit = useTimeUnit(unit);
  const classNames = useClassNames(ComponentToken.Clock);
  const menuRef = useRef<MenuRef>(null);
  const theme = useTheme();

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

  const styled = stylex.props(
    styles.column(theme.colors[ColorToken.Secondary], theme.colors[ColorToken.OutlineVariant])
  );

  return (
    <Menu
      selectedKeys={selectedKeys}
      ref={menuRef}
      className={clsx(styled.className, classNames[ClockClassToken.Column])}
      style={styled.style}
      items={Array.from(Array(timeUnit).keys()).map((step) => ({
        key: step,
        label: step.toString().padStart(2, "0"),
      }))}
      onClick={onClick}
    />
  );
});

export default Column;
