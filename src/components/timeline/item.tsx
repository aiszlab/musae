import React, { type CSSProperties, useContext, useMemo } from "react";
import type { TimelineItemProps } from "musae/types/timeline";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";
import { sizes, spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useTheme } from "../theme";

const styles = {
  item: stylex.create({
    default: {
      display: "grid",
      justifyContent: "flex-start",
      gap: spacing.medium,
      overflow: "hidden",
      paddingBlockEnd: spacing.xxlarge,
    },

    right: {
      gridTemplateColumns: "auto 1fr",
      gridTemplateAreas: "'leading description'",
    },

    left: {
      gridTemplateColumns: "1fr auto",
      gridTemplateAreas: "'description leading'",
    },
  }),

  labeled: stylex.create({
    default: {
      gridTemplateColumns: "1fr auto 1fr",
    },

    right: {
      gridTemplateAreas: "'label leading description'",
    },

    left: {
      gridTemplateAreas: "'description leading label'",
    },
  }),

  leading: stylex.create({
    default: {
      gridArea: "leading",
      alignSelf: "flex-start",
    },

    tail: {
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: "var(--primary)",
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    },
  }),

  sign: stylex.create({
    default: (props: { size?: number }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: props.size ?? sizes.xsmall,
      height: props.size ?? sizes.xsmall,
    }),
  }),

  dot: stylex.create({
    default: {
      width: sizes.xxxxxxxsmall,
      height: sizes.xxxxxxxsmall,
      borderRadius: sizes.infinity,
      backgroundColor: "var(--primary)",
    },
  }),

  label: stylex.create({
    default: {
      gridArea: "label",
    },

    right: {
      justifySelf: "flex-end",
    },

    left: {
      justifySelf: "flex-start",
    },
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
    },

    right: {
      justifySelf: "flex-start",
    },

    left: {
      justifySelf: "flex-end",
    },
  }),
};

const Item = ({ description, label, value, dot }: TimelineItemProps) => {
  const { mode: _mode, max, size, classNames } = useContext(Context);
  const theme = useTheme();
  const isLabeled = !!label;
  const isMax = max === value;

  // convert alternate mode to normal mode
  const mode = useMemo(() => {
    if (_mode === "alternate") {
      return value % 2 === 1 ? "right" : "left";
    }
    return _mode;
  }, [_mode, value]);

  const styled = {
    item: stylex.props(
      styles.item.default,
      styles.item[mode],
      isLabeled && styles.labeled.default,
      isLabeled && styles.labeled[mode],
    ),
    label: stylex.props(styles.label.default, styles.label[mode]),
    leading: stylex.props(styles.leading.default, !isMax && styles.leading.tail),
    sign: stylex.props(styles.sign.default({ size })),
    dot: stylex.props(styles.dot.default),
    description: stylex.props(styles.description.default, styles.description[mode]),
  };

  return (
    <li className={stringify(classNames.item, styled.item.className)} style={styled.item.style}>
      {isLabeled && (
        <div
          className={stringify(classNames.label, styled.label.className)}
          style={styled.label.style}
        >
          {label}
        </div>
      )}

      <div
        className={stringify(classNames.leading, styled.leading.className)}
        style={styled.leading.style}
      >
        <div
          className={stringify(classNames.sign, styled.sign.className)}
          style={styled.sign.style}
        >
          {dot ?? (
            <span
              className={stringify(classNames.dot, styled.dot.className)}
              style={styled.dot.style}
            />
          )}
        </div>
      </div>

      <div
        className={stringify(classNames.description, styled.description.className)}
        style={styled.description.style}
      >
        {description}
      </div>
    </li>
  );
};

export default Item;
