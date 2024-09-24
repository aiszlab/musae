import React, {
  type CSSProperties,
  type Key,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { useTimeUnit } from "./hooks";
import { ColumnProps } from "./types";
import { Menu } from "../menu";
import { useClassNames } from "../../hooks/use-class-names";
import { ClockClassToken } from "../../utils/class-name";
import { isVoid, clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { ComponentToken } from "../../utils/component-token";
import type { MenuRef } from "musae/types/menu";

const styles = stylex.create({
  menu: (props: {
    scrollbarThumbColor: CSSProperties["backgroundColor"];
    outlineColor: CSSProperties["borderLeftColor"];
  }) => ({
    overflowX: "hidden",
    overflowY: {
      default: "hidden",
      ":hover": "auto",
    },

    width: sizes.xxlarge,
    marginBlock: spacing.xxsmall,

    "::-webkit-scrollbar": {
      width: spacing.small,
      backgroundColor: "transparent",
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      backgroundColor: props.scrollbarThumbColor,
    },
  }),

  item: {
    width: sizes.xxlarge,
    display: "flex",
    justifyContent: "center",
  },
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
    [onChange],
  );

  useImperativeHandle(ref, () => ({}), []);

  useEffect(() => {
    if (isVoid(value)) return;
    menuRef.current?.scrollTo(value || 0, 100);
  }, [value]);

  const styled = {
    menu: stylex.props(
      styles.menu({
        scrollbarThumbColor: theme.colors[ColorToken.Secondary],
        outlineColor: theme.colors[ColorToken.OutlineVariant],
      }),
    ),
    item: stylex.props(styles.item),
  };

  return (
    <Menu
      selectedKeys={value}
      ref={menuRef}
      className={clsx(styled.menu.className, classNames[ClockClassToken.Column])}
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
