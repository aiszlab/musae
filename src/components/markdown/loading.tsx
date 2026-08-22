import styles from "./styles";
import React, { useContext } from "react";
import { Skeleton } from "../skeleton";
import { props as $props } from "@stylexjs/stylex";
import { Space } from "../space";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const Loading = () => {
  const { classNames } = useContext(Context);

  const styled = {
    loading: $props(styles.loading.default),
    heading: $props(styles.loading.heading),
    content: $props(styles.loading.content),
    newline: $props(styles.loading.newline),
    footer: $props(styles.loading.footer),
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
