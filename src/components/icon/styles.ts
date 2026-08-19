import { create as $create } from "@stylexjs/stylex";

const styles = $create({
  icon: {
    display: "inline-flex",
    verticalAlign: "middle",
    color: "var(--color)",
  },

  clickable: {
    cursor: "pointer",
    userSelect: "none",
  },
});

export default styles;
