import React, { CSSProperties } from "react";
import { useTimeout } from "@aiszlab/relax";
import type { MessageProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { elevations, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  message: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    marginBlock: spacing.small,
    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: 6,
    backgroundColor: props.backgroundColor,
    boxShadow: elevations.xsmall,
  }),
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
  const theme = useTheme();

  return (
    <div
      {...stylex.props(
        styles.message({
          backgroundColor: theme.colors[ColorToken.OnPrimary],
        })
      )}
    >
      {type}
    </div>
  );
};

export default Message;
