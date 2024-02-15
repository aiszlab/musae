import React from "react";
import type { SpaceProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  space: { display: "flex", gap: spacing.small, alignItems: "center" },
});

const Space = (props: SpaceProps) => {
  return <div {...stylex.props(styles.space)}>{props.children}</div>;
};

export default Space;
