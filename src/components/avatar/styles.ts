import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const group = $create({
  base: {
    display: "inline-flex",
    userSelect: "none",
  },
});

const avatar = $create({
  base: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "transparent",
    boxSizing: "border-box",
    backgroundColor: "var(--color-primary-container)",
    color: "var(--color-primary)",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",

    display: "inline-flex",
    verticalAlign: "middle",

    // 阻止在`flex`布局下被压缩
    flexShrink: 0,
  },

  overlapping: {
    ":not(:first-child)": {
      marginInlineStart: `calc(${spacing.xxsmall} * -1)`,
    },

    borderColor: "var(--color-on-primary)",
  },

  circular: {
    borderRadius: sizes.infinity,
  },

  squared: {
    borderRadius: sizes.xxxxxxxxxsmall,
  },

  small: {
    width: sizes.xsmall,
    height: sizes.xsmall,
  },

  medium: {
    width: sizes.medium,
    height: sizes.medium,
  },

  large: {
    width: sizes.xlarge,
    height: sizes.xlarge,
  },
});

const loading = $create({
  base: {
    display: "inline-block",
    verticalAlign: "middle",
  },
});

const image = $create({
  base: {
    objectFit: "cover",
    objectPosition: "center center",
    borderRadius: "inherit",
  },
});

const styles = {
  group,
  avatar,
  loading,
  image,
};

export default styles;
