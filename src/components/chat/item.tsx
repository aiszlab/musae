import { useMounted } from "@aiszlab/relax";
import React, { useContext, useState } from "react";
import { fetchEventSource } from "@aiszlab/relax/fetch-event-source";
import type { ChatItemProps } from "../../types/chat";
import { Context } from "./context";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";

const styles = stylex.create({
  item: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.medium,
  },

  send: (props: { backgroundColor: string; color: string }) => ({
    alignSelf: "flex-end",
    display: "flex",
    justifyContent: "flex-end",
    width: "fit-content",
    paddingInline: spacing.large,
    paddingBlock: spacing.xsmall,
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: sizes.xxxxsmall,
  }),

  message: {},

  content: {},
});

const Item = ({ message }: ChatItemProps) => {
  const [content, setContent] = useState("");
  const { classNames } = useContext(Context);
  const theme = useTheme();

  console.log("message======", message);

  useMounted(() => {
    if (!message) return;

    // fetchEventSource("http://localhost:3100/api/chat", {
    //   body: JSON.stringify({
    //     message,
    //   }),
    // });
  });

  const styled = {
    item: stylex.props(styles.item),
    send: stylex.props(
      styles.send({
        backgroundColor: theme.colors["surface-container-highest"],
        color: theme.colors["on-surface"],
      }),
    ),
  };

  return (
    <div className={stringify(classNames.item, styled.item.className)} style={styled.item.style}>
      <div className={stringify(classNames.send, styled.send.className)} style={styled.send.style}>
        {message}
      </div>
      <div className={classNames.receive}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Item;
