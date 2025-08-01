import React, { type Key, useCallback, useContext, useEffect, useRef } from "react";
import type { ColumnProps, TimeUnit } from "../../types/clock";
import { Menu } from "../menu";
import { isVoid } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import type { MenuRef } from "../../types/menu";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";
import { $scrollbar } from "../theme/theme";

const UNITS: Record<TimeUnit, number> = {
  hour: 24,
  minute: 60,
  second: 60,
};

const styles = $create({
  menu: {
    overflowX: "hidden",
    overflowY: {
      default: "hidden",
      ":hover": "auto",
    },

    width: sizes.xxxlarge,
    marginBlock: spacing.xxxxxsmall,
  },

  item: {
    width: sizes.xxxlarge,
    display: "flex",
    justifyContent: "center",
  },
});

const Column = ({ unit, value, onChange }: ColumnProps) => {
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

  useEffect(() => {
    if (isVoid(value)) return;
    menuRef.current?.scrollTo(value ?? 0, 100);
  }, [value]);

  const styled = {
    menu: $props($scrollbar.default, styles.menu),
    item: $props(styles.item),
  };

  return (
    <Menu
      selectedKeys={value}
      ref={menuRef}
      className={stringify(styled.menu.className, classNames.column)}
      style={{
        ...styled.menu.style,
        "--color-scrollbar-thumb": theme.colors.secondary,
      }}
      items={Array.from(Array(timeUnit).keys()).map((step) => ({
        key: step,
        label: step.toString().padStart(2, "0"),
        className: styled.item.className,
        style: styled.item.style,
      }))}
      onClick={onClick}
    />
  );
};

export default Column;
