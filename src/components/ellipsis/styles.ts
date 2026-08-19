import { create as $create } from "@stylexjs/stylex";

const styles = $create({
  ellipsis: {
    overflow: "hidden",
  },

  virtual: {
    position: "fixed",
    visibility: "hidden",
  },
});

export default styles;
