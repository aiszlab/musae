import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const item = $create({
  more: {
    "@media (hover: hover)": {
      ":hover > [role='separator']": {
        display: "none",
      },

      ":not(:hover) > [role='button']": {
        display: "none",
      },
    },

    "@media (hover: none)": {
      ":active > [role='separator']": {
        display: "none",
      },

      ":not(:active) > [role='button']": {
        display: "none",
      },
    },
  },
});

const pagination = $create({
  pagination: {
    display: "flex",
    columnGap: spacing.xxxxxsmall,
    listStyleType: "none",
    margin: spacing.none,
    padding: spacing.none,
  },

  sizer: {
    display: "flex",
    alignItems: "center",
  },
});

const styles = {
  item,
  pagination,
};

export default styles;
