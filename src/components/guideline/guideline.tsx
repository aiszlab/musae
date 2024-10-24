import React, { type CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { clsx } from "@aiszlab/relax";
import { GuidelineClassToken } from "../../utils/class-name";
import { Image } from "../image";
import type { GuidelineProps } from "../../types/guideline";
import { useTheme } from "../theme";
import { useLocale } from "../../locale";

const styles = stylex.create({
  guideline: {
    display: "inline-flex",
    flexDirection: "column",
  },

  figure: {
    borderStartStartRadius: sizes.xxxsmall,
    borderStartEndRadius: sizes.xxxsmall,
    borderEndStartRadius: sizes.xxxxxxsmall,
    borderEndEndRadius: sizes.xxxxxxsmall,
  },

  label: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    marginBlockStart: spacing.xxsmall,
    backgroundColor: props.backgroundColor,
    borderStartStartRadius: sizes.xxxxxxsmall,
    borderStartEndRadius: sizes.xxxxxxsmall,
    borderEndStartRadius: sizes.xxxsmall,
    borderEndEndRadius: sizes.xxxsmall,
  }),

  recommend: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
  }),

  caption: {
    marginBlockStart: spacing.small,
    marginInline: spacing.small,
    paddingBlock: spacing.large,
    paddingInline: spacing.xxxxsmall,
  },
});

const Guideline = ({ figure, caption, recommend = true, className, style }: GuidelineProps) => {
  const classNames = useClassNames("guideline");
  const theme = useTheme();
  const [locale] = useLocale("guideline");

  const styled = {
    guideline: stylex.props(styles.guideline),
    figure: stylex.props(styles.figure),
    label: stylex.props(
      styles.label({
        backgroundColor: theme.colors.error,
      }),
      recommend && styles.recommend({ backgroundColor: theme.colors.success }),
    ),
    caption: stylex.props(styles.caption),
  };

  return (
    <div
      className={clsx(
        classNames[GuidelineClassToken.Guideline],
        className,
        styled.guideline.className,
      )}
      style={{
        ...styled.guideline.style,
        ...style,
      }}
    >
      <Image
        src={figure}
        className={clsx(classNames[GuidelineClassToken.Figure], styled.figure.className)}
        style={styled.figure.style}
      />

      <span
        className={clsx(classNames[GuidelineClassToken.CaptionLabel], styled.label.className)}
        style={styled.label.style}
      >
        {recommend ? locale.recommend : locale.oppose}
      </span>

      {!!caption && (
        <span
          className={clsx(classNames[GuidelineClassToken.Caption], styled.caption.className)}
          style={styled.caption.style}
        >
          {caption}
        </span>
      )}
    </div>
  );
};

export default Guideline;
