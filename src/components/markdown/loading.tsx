import React from "react";
import { Skeleton } from "../skeleton";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Space } from "../space";

const styles = stylex.create({
  wrapper: {
    padding: spacing.medium,
  },

  heading: {
    width: sizes.xxxxxlarge,
    height: sizes.xxsmall,
  },

  content: {
    width: sizes.xxxxxxlarge,
    height: sizes.xxxxxxlarge,
  },

  footer: {
    width: sizes.xxxxxlarge,
    height: sizes.xxsmall,
  },
});

const Loading = () => {
  const styled = {
    wrapper: stylex.props(styles.wrapper),
    heading: stylex.props(styles.heading),
    content: stylex.props(styles.content),
    footer: stylex.props(styles.footer),
  };

  return (
    <Space orientation="vertical" gutter={8} {...styled.wrapper}>
      <Skeleton {...styled.heading} />
      <Skeleton {...styled.content} />
      <Skeleton {...styled.footer} />
    </Space>
  );
};

export default Loading;
