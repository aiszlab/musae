import React, { type CSSProperties, useContext, useMemo } from "react";
import { TimelineItemProps } from "./types";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, TimelineClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = {
  item: stylex.create({
    default: {
      display: "grid",
      justifyContent: "flex-start",
      gap: spacing.medium,
      overflow: "hidden",
      paddingBottom: spacing.xlarge,
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

    tail: (props: { color: CSSProperties["color"] }) => ({
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: props.color,
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    }),
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
    default: (props: { color: CSSProperties["color"] }) => ({
      width: sizes.xxxxxsmall,
      height: sizes.xxxxxsmall,
      borderRadius: sizes.infinity,
      backgroundColor: props.color,
    }),
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
  const classNames = useClassNames(ComponentToken.Timeline);
  const { mode: _mode, max, size } = useContext(Context);
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
      isLabeled && styles.labeled[mode]
    ),
    label: stylex.props(styles.label.default, styles.label[mode]),
    leading: stylex.props(
      styles.leading.default,
      !isMax && styles.leading.tail({ color: theme.colors[ColorToken.Primary] })
    ),
    sign: stylex.props(styles.sign.default({ size })),
    dot: stylex.props(styles.dot.default({ color: theme.colors[ColorToken.Primary] })),
    description: stylex.props(styles.description.default, styles.description[mode]),
  };

  return (
    <li className={clsx(classNames[TimelineClassToken.Item], styled.item.className)} style={styled.item.style}>
      {isLabeled && (
        <div className={clsx(classNames[TimelineClassToken.Label], styled.label.className)} style={styled.label.style}>
          {label}
        </div>
      )}

      <div
        className={clsx(classNames[TimelineClassToken.Leading], styled.leading.className)}
        style={styled.leading.style}
      >
        <div className={clsx(classNames[TimelineClassToken.Sign], styled.sign.className)} style={styled.sign.style}>
          {dot ?? (
            <span className={clsx(classNames[TimelineClassToken.Dot], styled.dot.className)} style={styled.dot.style} />
          )}
        </div>
      </div>

      <div
        className={clsx(classNames[TimelineClassToken.Description], styled.description.className)}
        style={styled.description.style}
      >
        {description}
      </div>
    </li>
  );
};

export default Item;
