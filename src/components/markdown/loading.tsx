import React, { useContext } from "react";
import { Skeleton } from "../skeleton";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Space } from "../space";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  loading: {
    padding: spacing.medium,
  },

  heading: {
    width: sizes.xxxxxxlarge,
    height: sizes.medium,
    borderRadius: sizes.xxxxxxsmall,
  },

  content: {
    width: 600,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxxsmall,
  },

  newline: {
    width: sizes.xxxxxxxlarge,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxxsmall,
  },

  footer: {
    width: sizes.xxxxxxlarge,
    height: sizes.small,
    borderRadius: sizes.xxxxxxsmall,
  },
});

const Loading = () => {
  const { classNames } = useContext(Context);

  const styled = {
    loading: $props(styles.loading),
    heading: $props(styles.heading),
    content: $props(styles.content),
    newline: $props(styles.newline),
    footer: $props(styles.footer),
  };

  return (
    <Space
      className={(stringify(classNames.loading), styled.loading.className)}
      style={styled.loading.style}
      orientation="vertical"
      gutter={8}
    >
      <Skeleton {...styled.heading} />

      <Space orientation="vertical" gutter={8}>
        <Skeleton {...styled.content} />
        <Skeleton {...styled.content} />
        <Skeleton {...styled.newline} />

        <Skeleton {...styled.content} />
        <Skeleton {...styled.content} />
        <Skeleton {...styled.newline} />
      </Space>

      <Skeleton {...styled.footer} />
    </Space>
  );
};

export default Loading;
