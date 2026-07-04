import React, { useEffect, useRef } from "react";
import { animate } from "motion/react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useAsyncEffect } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { useClosable } from "../../hooks/use-closable";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { positions, spacing, sizes, OPACITY } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";
import type { BottomSheetProps } from "../../types/bottom-sheet";

type SheetProps = Required<Pick<BottomSheetProps, "height" | "closable">> &
  Omit<BottomSheetProps, "height" | "closable"> & {
    /** Called after exit animation completes, signals Portal to unmount */
    onClosed: VoidFunction;
  };

const ANIMATION_OPTIONS = {
  enter: { duration: 0.3 },
  exit: { duration: 0.2 },
} as const;

const styles = $create({
  popup: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: positions.drawer,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    opacity: 0,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
  },

  panel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: "auto",
    backgroundColor: "var(--color-surface-container)" satisfies ThemeColorVariable,
    borderTopLeftRadius: sizes.small,
    borderTopRightRadius: sizes.small,
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    overflow: "hidden",
    transform: "translateY(100%)",
  },

  handle: {
    width: sizes.medium,
    height: sizes.xxxxxxxxxsmall,
    borderRadius: sizes.xxxxxxxxxxsmall,
    backgroundColor: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    marginTop: spacing.xxsmall,
    marginBottom: spacing.xxsmall,
    marginInline: "auto",
    flexShrink: 0,
  },

  body: {
    flex: 1,
    overflow: "auto",
    padding: spacing.xxxlarge,
  },
});

const Sheet = ({
  open,
  onClose,
  onClosed,
  height = "50vh",
  closable,
  className,
  children,
}: SheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const themeColorVars = useThemeColorVars([
    "surface-dim",
    "surface-container",
    "on-surface-variant",
  ]);

  const { onOverlayClick, onKeyDown } = useClosable({
    closable,
    onClose,
  });

  useAsyncEffect(async () => {
    if (!ref.current) return;

    if (open) {
      ref.current.style.display = "block";
      await Promise.all([
        panelRef.current &&
          animate(panelRef.current, { transform: "translateY(0)" }, ANIMATION_OPTIONS.enter),
        overlayRef.current &&
          animate(overlayRef.current, { opacity: OPACITY.heavier }, ANIMATION_OPTIONS.enter),
      ]);
      return;
    }

    await Promise.all([
      panelRef.current &&
        animate(panelRef.current, { transform: "translateY(100%)" }, ANIMATION_OPTIONS.exit),
      overlayRef.current &&
        animate(overlayRef.current, { opacity: 0 }, ANIMATION_OPTIONS.exit),
    ]);
    ref.current.style.display = "none";
    onClosed();
  }, [open]);

  const styled = {
    popup: $props(styles.popup),
    overlay: $props(styles.overlay),
    panel: $props(styles.panel),
    handle: $props(styles.handle),
    body: $props(styles.body),
  };

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className={stringify(classNames.sheet, className, styled.popup.className)}
      style={{
        ...styled.popup.style,
        display: "none",
      }}
      onKeyDown={onKeyDown}
    >
      {/* overlay */}
      <div
        ref={overlayRef}
        className={stringify(classNames.overlay, styled.overlay.className)}
        style={styled.overlay.style}
        onClick={onOverlayClick}
      />

      {/* panel */}
      <div
        ref={panelRef}
        className={stringify(classNames.panel, styled.panel.className)}
        style={{
          ...styled.panel.style,
          ...themeColorVars,
          height: typeof height === "number" ? `${height}px` : height,
        }}
      >
        {/* drag handle */}
        <div
          className={stringify(classNames.handle, styled.handle.className)}
          style={styled.handle.style}
        />

        {/* body */}
        <div
          className={stringify(classNames.body, styled.body.className)}
          style={styled.body.style}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sheet;
