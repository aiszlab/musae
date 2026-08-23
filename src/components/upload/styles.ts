import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const upload = $create({
  uploader: {
    display: "inline-block",
  },

  input: {
    display: "none",
  },

  upload: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
    width: sizes.fit,
  },
});

const uploadedList = $create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
  },

  filename: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const item = $create({
  default: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
  },
});

const filename = $create({
  default: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const picture = $create({
  default: {
    width: sizes.xxxxxxxxlarge,
    height: sizes.xxxxxxxxlarge,
  },

  wrapper: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    borderRadius: sizes.xxxxxxxxxsmall,
    padding: spacing.xxsmall,
  },
});

const styles = {
  upload,
  uploadedList,
  item,
  filename,
  picture,
};

export default styles;
