import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

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

const styles = {
  upload,
  uploadedList,
};

export default styles;
