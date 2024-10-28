import React, { type CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
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
    marginBlockStart: spacing.xxxsmall,
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
    marginBlockStart: spacing.xsmall,
    marginInline: spacing.xsmall,
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
      className={stringify(
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
        className={stringify(classNames[GuidelineClassToken.Figure], styled.figure.className)}
        style={styled.figure.style}
      />

      <span
        className={stringify(classNames[GuidelineClassToken.CaptionLabel], styled.label.className)}
        style={styled.label.style}
      >
        {recommend ? locale.recommend : locale.oppose}
      </span>

      {!!caption && (
        <span
          className={stringify(classNames[GuidelineClassToken.Caption], styled.caption.className)}
          style={styled.caption.style}
        >
          {caption}
        </span>
      )}
    </div>
  );
};

export default Guideline;
