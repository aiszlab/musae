import React, {
  type CSSProperties,
  type Key,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { ColumnProps, TimeUnit } from "../../types/clock";
import { Menu } from "../menu";
import { isVoid } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import type { MenuRef } from "../../types/menu";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const UNITS: Record<TimeUnit, number> = {
  hour: 24,
  minute: 60,
  second: 60,
};

const styles = stylex.create({
  menu: {
    overflowX: "hidden",
    overflowY: {
      default: "hidden",
      ":hover": "auto",
    },

    width: sizes.xxlarge,
    marginBlock: spacing.xxxxxsmall,

    "::-webkit-scrollbar": {
      width: spacing.xxsmall,
      backgroundColor: "transparent",
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      backgroundColor: "var(--color-secondary)",
    },
  },

  item: {
    width: sizes.xxlarge,
    display: "flex",
    justifyContent: "center",
  },
});

const Column = forwardRef<{}, ColumnProps>(({ unit, value, onChange }, ref) => {
  const timeUnit = UNITS[unit];
  const { classNames } = useContext(Context);
  const menuRef = useRef<MenuRef>(null);
  const theme = useTheme();

  const onClick = useCallback(
    (key: Key) => {
      onChange?.(key as number);
      menuRef.current?.scrollTo(key, 100);
    },
    [onChange],
  );

  useImperativeHandle(ref, () => ({}), []);

  useEffect(() => {
    if (isVoid(value)) return;
    menuRef.current?.scrollTo(value || 0, 100);
  }, [value]);

  const styled = {
    menu: stylex.props(styles.menu),
    item: stylex.props(styles.item),
  };

  return (
    <Menu
      selectedKeys={value}
      ref={menuRef}
      className={stringify(styled.menu.className, classNames.column)}
      style={styled.menu.style}
      items={Array.from(Array(timeUnit).keys()).map((step) => ({
        key: step,
        label: step.toString().padStart(2, "0"),
        className: styled.item.className,
        style: styled.item.style,
      }))}
      onClick={onClick}
    />
  );
});

export default Column;
