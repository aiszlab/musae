import React, { forwardRef, useEffect, useRef } from "react";
import type { PopupProps } from "../../types/dialog";
import { useFooter } from "./hooks";
import { animate } from "motion/react";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { positions, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { contains } from "@aiszlab/relax/dom";
import { useClosable } from "../../hooks/use-closable";
import { CLASS_NAMES } from "./context";
import { useAsyncEffect, useComposedRef } from "@aiszlab/relax";
import { $body, $headline } from "../theme/theme";

const styles = $create({
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: positions.dialog,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "auto",
    backgroundColor: "var(--color-surface-dim)",
    opacity: 0,
  },

  panel: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.large,
    minWidth: 480,
    maxHeight: `calc(100% - ${spacing.xxxxxxlarge} * 2)`,
    margin: spacing.xxxxxxlarge,
    borderRadius: 8,
    pointerEvents: "auto",
    backgroundColor: "var(--color-surface-container-lowest)",
    opacity: 0,
    position: "relative",
    paddingBlock: spacing.xxxlarge,
  },

  header: {
    paddingInline: spacing.xxxlarge,
  },

  body: { flex: 1, wordBreak: "break-word", overflow: "auto", paddingInline: spacing.xxxlarge },

  footer: {
    marginBlockStart: spacing.xxsmall,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingInline: spacing.xxxlarge,
  },
});

const Popup = forwardRef<HTMLDivElement, PopupProps>(
  ({ onClose, open, closable, onClosed, className, onConfirm, confirm, cancel, ...props }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const theme = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const composedRef = useComposedRef(ref, containerRef);

    // `footer` render hooks
    const footer = useFooter({
      footer: props.footer,
      onConfirm,
      onClose,
      confirm,
      cancel,
    });
    const { closer, onKeyDown, onOverlayClick } = useClosable({
      closable,
      onClose,
      placement: "top-right",
    });

    useAsyncEffect(async () => {
      const _popup = containerRef.current;
      if (!_popup) return;

      if (open) {
        _popup.style.display = "flex";
        await Promise.all([
          panelRef.current && animate(panelRef.current, { opacity: 1 }),
          overlayRef.current && animate(overlayRef.current, { opacity: 0.8 }),
        ]);
        return;
      }

      await Promise.all([
        panelRef.current && animate(panelRef.current, { opacity: 0 }),
        overlayRef.current && animate(overlayRef.current, { opacity: 0 }),
      ]);
      _popup.style.display = "none";
      onClosed?.();
    }, [open]);

    // when open, try focus dialog
    useEffect(() => {
      if (!open) return;
      if (contains(containerRef.current, document.activeElement)) return;
      containerRef.current?.focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const styled = {
      popup: $props(styles.popup),
      overlay: $props(styles.overlay),
      panel: $props(styles.panel),
      header: $props($headline.small, styles.header),
      body: $props($body.medium, styles.body),
      footer: $props(styles.footer),
    };

    return (
      <div
        ref={composedRef}
        className={stringify(classNames.dialog, className, styled.popup.className)}
        style={{
          ...styled.popup.style,
          "--color-surface-dim": theme.colors["surface-dim"],
          "--color-surface-container-lowest": theme.colors["surface-container-lowest"],
        }}
        tabIndex={-1}
        onKeyDown={onKeyDown}
      >
        {/* overlay */}
        <div
          className={stringify(classNames.overlay, styled.overlay.className)}
          style={styled.overlay.style}
          onClick={onOverlayClick}
          ref={overlayRef}
        />

        {/* panel */}
        <div
          className={stringify(classNames.panel, styled.panel.className)}
          style={{
            ...styled.panel.style,
            ...props.styles?.panel,
          }}
          ref={panelRef}
        >
          {closer}

          {/* header */}
          {!!props.title && (
            <div
              className={stringify(classNames.header, styled.header.className)}
              style={styled.header.style}
            >
              {props.title}
            </div>
          )}

          {/* body */}
          <div
            className={stringify(classNames.body, styled.body.className)}
            style={{
              ...styled.body.style,
              ...props.styles?.body,
            }}
          >
            {props.children}
          </div>

          {/* footer */}
          {!!footer && (
            <div
              className={stringify(classNames.footer, styled.footer.className)}
              style={styled.footer.style}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default Popup;
