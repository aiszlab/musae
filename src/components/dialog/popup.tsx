import React, { type CSSProperties, useEffect, useRef } from "react";
import type { PopupProps } from "../../types/dialog";
import { useFooter } from "./hooks";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../../hooks/use-class-names.component";
import stylex from "@stylexjs/stylex";
import { positions, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { contains } from "@aiszlab/relax/dom";
import { useClosable } from "../../hooks/use-closable";
import { CLASS_NAMES } from "./context";

const styles = stylex.create({
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
    zIndex: positions.dialog,
    backgroundColor: "var(--surface-dim)",
    opacity: 0,
  },

  panel: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.large,
    minWidth: 480,
    maxHeight: `calc(100% - ${spacing.xxxlarge} * 2)`,
    margin: spacing.xxxlarge,
    borderRadius: 8,
    pointerEvents: "auto",
    backgroundColor: "var(--surface-container-lowest)",
    zIndex: positions.dialog,
    opacity: 0,
    position: "relative",

    padding: spacing.xxlarge,
  },

  body: { flex: 1, wordBreak: "break-word", overflow: "auto" },

  footer: {
    marginBlockStart: spacing.xxsmall,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

const Popup = ({ onClose, open, closable, onClosed, className, ...props }: PopupProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const theme = useTheme();
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // children render hooks
  const footer = useFooter([props.footer, props.onConfirm, onClose]);
  const { closer, onKeyDown, onOverlayClick } = useClosable({
    closable,
    onClose,
    placement: "top-right",
  });

  useEffect(() => {
    (async () => {
      if (open) {
        scope.current.style.display = "flex";
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
      scope.current.style.display = "none";
      onClosed?.();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // when open, try focus dialog
  useEffect(() => {
    if (!open) return;
    if (contains(scope.current, document.activeElement)) return;
    scope.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const styled = {
    popup: stylex.props(styles.popup),
    overlay: stylex.props(styles.overlay),
    panel: stylex.props(styles.panel),
    header: stylex.props(typography.headline.small),
    body: stylex.props(typography.body.medium, styles.body),
    footer: stylex.props(styles.footer),
  };

  return (
    <div
      ref={scope}
      className={stringify(classNames.dialog, className, styled.popup.className)}
      style={{
        ...styled.popup.style,
        // @ts-expect-error
        "--surface-dim": theme.colors["surface-dim"],
        "--surface-container-lowest": theme.colors["surface-container-lowest"],
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
};

export default Popup;
