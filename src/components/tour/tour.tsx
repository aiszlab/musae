import React, { type CSSProperties } from "react";
import type { TourProps } from "./types";
import { Portal } from "../portal";
import { Popper } from "../popper";
import stylex from "@stylexjs/stylex";
import { Button } from "../button";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { elevations, positions, sizes, spacing } from "../theme/tokens.stylex";
import { Space } from "../space";
import { typography } from "../theme/theme";
import { useClassNames } from "../config";
import { ComponentToken, TourClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useStep } from "./hooks";

const styles = stylex.create({
  overlay: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    position: "absolute",
    inset: 0,
    mixBlendMode: "hard-light",
    backgroundColor: props.backgroundColor,
    zIndex: positions.tour,
  }),

  spotlight: { backgroundColor: "gray" },

  tour: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    boxShadow: elevations.small,
    borderRadius: sizes.xxxsmall,
    transition: "all 0.2s",
  }),

  title: {
    paddingInline: spacing.large,
    paddingBlockStart: spacing.large,
    paddingBlockEnd: spacing.small,
  },

  description: {
    paddingInline: spacing.large,
  },

  footer: {
    paddingInline: spacing.large,
    paddingBlockStart: spacing.small,
    paddingBlockEnd: spacing.large,
  },
});

const Tour = ({
  steps = [],
  open = false,
  onClose,
  offset = { mainAxis: -8, crossAxis: -8 },
  overlay = true,
}: TourProps) => {
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Tour);
  const { step, next, prev, hasNext, hasPrev } = useStep({ steps, open });

  const styled = {
    overlay: stylex.props(styles.overlay({ backgroundColor: theme.colors[ColorToken.SurfaceDim] })),
    spotlight: stylex.props(styles.spotlight),
    tour: stylex.props(
      styles.tour({
        backgroundColor: theme.colors[ColorToken.OnPrimary],
      })
    ),
    title: stylex.props(styles.title, typography.title.medium),
    description: stylex.props(styles.description, typography.body.medium),
    footer: stylex.props(styles.footer),
  };

  /// close handler
  const close = () => {
    onClose?.();
  };

  return (
    <>
      <Portal open={overlay && open} destroyable>
        <div
          className={clsx(classNames[TourClassToken.Overlay], styled.overlay.className)}
          style={styled.overlay.style}
        >
          <Popper
            trigger={step.target}
            open={open}
            className={clsx(classNames[TourClassToken.Spotlight], styled.spotlight.className)}
            style={styled.spotlight.style}
            portal={false}
            placement="center"
          />
        </div>
      </Portal>

      <Popper
        trigger={step.target}
        open={open}
        className={clsx(classNames[TourClassToken.Tour], styled.tour.className)}
        style={styled.tour.style}
        offset={offset}
      >
        <div className={clsx(classNames[TourClassToken.Title], styled.title.className)} style={styled.title.style}>
          {step.title}
        </div>

        <div
          className={clsx(classNames[TourClassToken.Description], styled.description.className)}
          style={styled.description.style}
        >
          {step.description}
        </div>

        <Space
          gutter={6}
          className={clsx(classNames[TourClassToken.Footer], styled.footer.className)}
          style={styled.footer.style}
        >
          {/* prev */}
          {hasPrev && (
            <Button onClick={prev} size="small">
              上一步
            </Button>
          )}

          {/* next */}
          {hasNext && (
            <Button onClick={next} size="small">
              下一步
            </Button>
          )}

          {/* close */}
          {!hasNext && (
            <Button onClick={close} size="small">
              结束
            </Button>
          )}
        </Space>
      </Popper>
    </>
  );
};

export default Tour;
