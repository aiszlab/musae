import React from "react";
import { useTimeout } from "@aiszlab/relax";
import type { MessageProps } from "./types";
import { stylex } from "@stylexjs/stylex";
import { elevations } from "../theme/tokens.stylex";

const styles = stylex.create({
  message: {
    marginTop: 8,
    marginBottom: 8,
    padding: "8px 12px",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    boxShadow: elevations.xsmall,
  },
});

const Message = ({ duration, type, onHidden, id }: MessageProps) => {
  useTimeout(
    () => {
      onHidden?.(id);
    },
    {
      duration,
    }
  );

  return <div {...stylex.props(styles.message)}>{type}</div>;
};

export default Message;
