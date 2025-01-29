import React, { type CSSProperties } from "react";
import type { TourProps } from "musae/types/tour";
import { Portal } from "../portal";
import { Popper } from "../popper";
import stylex from "@stylexjs/stylex";
import { Button } from "../button";
import { useTheme } from "../theme";
import { duration, elevations, positions, sizes, spacing } from "../theme/tokens.stylex";
import { Space } from "../space";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { useStep } from "./hooks";
import Spotlight from "./spotlight";
import { useGutters } from "../../hooks/use-gutters";
import { useLocale } from "../../locale";
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names.component";
import { useContainer } from "../../hooks/use-container";

const styles = stylex.create({
  overlay: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    position: "absolute",
    inset: 0,
    mixBlendMode: "hard-light",
    backgroundColor: props.backgroundColor,
    zIndex: positions.tour,
  }),

  tour: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    boxShadow: elevations.small,
    borderRadius: sizes.xxxxxxxsmall,
    transitionProperty: "all",
    transitionDuration: duration.short,
  }),

  title: {
    paddingInline: spacing.large,
    paddingBlockStart: spacing.large,
    paddingBlockEnd: spacing.xsmall,
  },

  description: {
    paddingInline: spacing.large,
  },

  footer: {
    paddingInline: spacing.large,
    paddingBlockStart: spacing.xsmall,
    paddingBlockEnd: spacing.large,
  },
});

const Tour = ({
  steps = [],
  open = false,
  onClose,
  overlay = true,
  spotlightPadding = 8,
}: TourProps) => {
  const theme = useTheme();
  const { step, next, prev, hasNext, hasPrev } = useStep({ steps, open });
  const paddings = useGutters({ gutter: spotlightPadding });
  const [locale] = useLocale("tour");
  const classNames = useClassNames(CLASS_NAMES);

  // every step should have a target
  const { container: trigger } = useContainer({ container: step.target, useBody: false });

  const styled = {
    overlay: stylex.props(styles.overlay({ backgroundColor: theme.colors["surface-dim"] })),
    tour: stylex.props(
      styles.tour({
        backgroundColor: theme.colors["on-primary"],
      }),
    ),
    title: stylex.props(styles.title, typography.title.medium),
    description: stylex.props(styles.description, typography.body.medium),
    footer: stylex.props(styles.footer),
  };

  // close handler
  const close = () => {
    onClose?.();
  };

  return (
    <Context.Provider value={{ classNames }}>
      <Portal open={overlay && open} destroyable lockable>
        <div
          className={stringify(classNames.overlay, styled.overlay.className)}
          style={styled.overlay.style}
        >
          <Spotlight trigger={trigger} padding={paddings} />
        </div>
      </Portal>

      <Popper
        trigger={trigger}
        open={open}
        className={stringify(classNames.tour, styled.tour.className)}
        style={styled.tour.style}
        offset={paddings[0]}
        placement="bottom"
        overlay={overlay}
        destroyable
      >
        <div
          className={stringify(classNames.title, styled.title.className)}
          style={styled.title.style}
        >
          {step.title}
        </div>

        <div
          className={stringify(classNames.description, styled.description.className)}
          style={styled.description.style}
        >
          {step.description}
        </div>

        <Space
          gutter={6}
          className={stringify(classNames.footer, styled.footer.className)}
          style={styled.footer.style}
        >
          {/* prev */}
          {hasPrev && (
            <Button onClick={prev} size="small">
              {locale.prev}
            </Button>
          )}

          {/* next */}
          {hasNext && (
            <Button onClick={next} size="small">
              {locale.next}
            </Button>
          )}

          {/* close */}
          {!hasNext && (
            <Button onClick={close} size="small">
              {locale.finish}
            </Button>
          )}
        </Space>
      </Popper>
    </Context.Provider>
  );
};

export default Tour;
