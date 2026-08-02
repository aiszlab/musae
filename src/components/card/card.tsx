import type { CardLayout, CardProps } from "../../types/card";
import type { MouseEvent } from "react";
import React, { forwardRef, useCallback, useState } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { OPACITY } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { CLASS_NAMES, CardContext } from "./context";
import styles from "./styles";
import CardHeader from "./header";
import CardMedia from "./media";
import CardContent from "./content";
import CardHeadline from "./headline";
import CardTitle from "./title";
import CardSubhead from "./subhead";
import CardBody from "./body";
import CardActions from "./actions";

/**
 * @zh 卡片组件,用于在一个容器中展示内容和操作。卡片支持多种样式变体(描边、浮起、填充)
 * 和布局变体(垂直堆叠、水平排布),并在悬停、聚焦、按下、拖拽时展示交互状态层与 elevation 变化。
 *
 * @en Card component for displaying content and actions in a single container.
 * Cards support multiple style variants (outlined, elevated, filled) and layout
 * variants (stacked, horizontal), with state-based elevation and state-layer
 * transitions on hover, focus, press, and drag.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      style,
      variant = "outlined",
      layout = "stacked",
      onClick,
      disabled,
      dragged: draggedProp,
      draggable = false,
      onDragStart: onDragStartProp,
      onDragEnd: onDragEndProp,
      ...props
    },
    ref,
  ) => {
    const classNames = useClassNames(CLASS_NAMES);
    const themeColorVars = useThemeColorVars([
      "surface",
      "surface-container-low",
      "surface-container-highest",
      "primary-container",
      "on-primary-container",
      "outline-variant",
      "on-surface",
      ["on-surface", OPACITY.thin],
      ["on-surface", OPACITY.medium],
      ["on-surface", OPACITY.thick],
    ]);

    // Auto-detect drag state via HTML5 events when `draggable` is true.
    const [autoDragged, setAutoDragged] = useState(false);
    const isDragged = draggedProp ?? autoDragged;

    const handleDragStart = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        if (draggable) setAutoDragged(true);
        onDragStartProp?.(event);
      },
      [draggable, onDragStartProp],
    );

    const handleDragEnd = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        if (draggable) setAutoDragged(false);
        onDragEndProp?.(event);
      },
      [draggable, onDragEndProp],
    );

    const interactive = !!onClick && !disabled;

    const handleClick = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        onClick?.(event);
      },
      [disabled, onClick],
    );

    const styled = $props(
      styles.card.default,
      styles.card[layout],
      styles.card[variant],
      interactive && styles.card.interactive,
      disabled && styles.card.disabled,
      // state-based elevation (only meaningful when interactive or dragged)
      interactive && variant === "outlined" && styles.elevationState.outlinedHover,
      isDragged && variant === "outlined" && styles.elevationState.outlinedDragged,
      interactive && variant === "elevated" && styles.elevationState.elevatedHover,
      isDragged && variant === "elevated" && styles.elevationState.elevatedDragged,
      isDragged && variant === "filled" && styles.elevationState.filledDragged,
      // state layer
      interactive && !isDragged && styles.stateLayer.hover,
      interactive && !isDragged && styles.stateLayer.focus,
      interactive && !isDragged && styles.stateLayer.press,
    );

    return (
      <CardContext.Provider value={{ layout: layout as CardLayout, disabled }}>
        <div
          ref={ref}
          className={stringify(classNames.card, className, styled.className)}
          style={{
            ...styled.style,
            ...style,
            ...themeColorVars,
            "--color-state-layer-hover": `color-mix(in srgb, var(--color-on-surface) 8%, transparent)`,
            "--color-state-layer-focus": `color-mix(in srgb, var(--color-on-surface) 12%, transparent)`,
            "--color-state-layer-press": `color-mix(in srgb, var(--color-on-surface) 12%, transparent)`,
            // 拖拽态:16% state layer(通过 CSS 变量直接驱动 `::after`)
            ...(isDragged && {
              "--card-state-layer": `color-mix(in srgb, var(--color-on-surface) 16%, transparent)`,
            }),
          }}
          onClick={handleClick}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          tabIndex={interactive ? 0 : undefined}
          role={interactive ? "button" : undefined}
          aria-disabled={disabled}
          draggable={draggable || undefined}
          {...props}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  },
);

const _Card = Object.assign(Card, {
  Header: CardHeader,
  Media: CardMedia,
  Content: CardContent,
  Headline: CardHeadline,
  Title: CardTitle,
  Subhead: CardSubhead,
  Body: CardBody,
  Actions: CardActions,
});

export default _Card;
export {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardHeadline,
  CardTitle,
  CardSubhead,
  CardBody,
  CardActions,
};
