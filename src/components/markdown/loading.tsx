import React from "react";
import { Skeleton } from "../skeleton";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Space } from "../space";

const styles = stylex.create({
  loading: {
    padding: spacing.medium,
  },

  heading: {
    width: sizes.xxxxxlarge,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxsmall,
  },

  content: {
    width: sizes.xxxxxxlarge,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxsmall,
  },

  footer: {
    width: sizes.xxxxxlarge,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxsmall,
  },
});

const Loading = () => {
  const styled = {
    loading: stylex.props(styles.loading),
    heading: stylex.props(styles.heading),
    content: stylex.props(styles.content),
    footer: stylex.props(styles.footer),
  };

  return (
    <Space orientation="vertical" gutter={8} {...styled.loading}>
      <Skeleton {...styled.heading} />

      <Space orientation="vertical" gutter={8}>
        <Skeleton {...styled.content} />
        <Skeleton {...styled.content} />
        <Skeleton {...styled.content} />
        <Skeleton {...styled.content} />
        <Skeleton {...styled.content} />
      </Space>

      <Skeleton {...styled.footer} />
    </Space>
  );
};

export default Loading;
