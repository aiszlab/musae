import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "../dist";
import React from "react";

const meta: Meta<typeof Typography> = {
  title: "typography",
  component: Typography,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Display — 使用 h1 语义元素，适用于页面最大的标题
 */
export const Display: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography.Display size="large">Display Large</Typography.Display>
      <Typography.Display size="medium">Display Medium</Typography.Display>
      <Typography.Display size="small">Display Small</Typography.Display>
    </div>
  ),
};

/**
 * Headline — 使用 h2 语义元素，适用于页面次级标题
 */
export const Headline: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Typography.Headline size="large">Headline Large</Typography.Headline>
      <Typography.Headline size="medium">Headline Medium</Typography.Headline>
      <Typography.Headline size="small">Headline Small</Typography.Headline>
    </div>
  ),
};

/**
 * Title — 使用 h3 语义元素，适用于区块标题
 */
export const Title: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography.Title size="large">Title Large</Typography.Title>
      <Typography.Title size="medium">Title Medium</Typography.Title>
      <Typography.Title size="small">Title Small</Typography.Title>
    </div>
  ),
};

/**
 * Body — 使用 p 语义元素，适用于正文段落
 */
export const Body: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography.Body size="large">
        Body Large — 正文大号文本，用于较长的阅读内容。
      </Typography.Body>
      <Typography.Body size="medium">
        Body Medium — 正文中等文本，默认尺寸，适合大多数段落。
      </Typography.Body>
      <Typography.Body size="small">
        Body Small — 正文小号文本，用于辅助说明或紧凑排版。
      </Typography.Body>
    </div>
  ),
};

/**
 * Label — 使用 span 语义元素，适用于标签、说明等文本
 */
export const Label: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography.Label size="large">Label Large</Typography.Label>
      <Typography.Label size="medium">Label Medium</Typography.Label>
      <Typography.Label size="small">Label Small</Typography.Label>
    </div>
  ),
};

/**
 * 所有排版组件概览
 */
export const Overview: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <section>
        <Typography.Title size="large" style={{ marginBottom: 12 }}>
          Display
        </Typography.Title>
        <Typography.Display size="large">Display Large</Typography.Display>
        <Typography.Display size="medium">Display Medium</Typography.Display>
        <Typography.Display size="small">Display Small</Typography.Display>
      </section>

      <section>
        <Typography.Title size="large" style={{ marginBottom: 12 }}>
          Headline
        </Typography.Title>
        <Typography.Headline size="large">Headline Large</Typography.Headline>
        <Typography.Headline size="medium">Headline Medium</Typography.Headline>
        <Typography.Headline size="small">Headline Small</Typography.Headline>
      </section>

      <section>
        <Typography.Title size="large" style={{ marginBottom: 12 }}>
          Title
        </Typography.Title>
        <Typography.Title size="large">Title Large</Typography.Title>
        <Typography.Title size="medium">Title Medium</Typography.Title>
        <Typography.Title size="small">Title Small</Typography.Title>
      </section>

      <section>
        <Typography.Title size="large" style={{ marginBottom: 12 }}>
          Body
        </Typography.Title>
        <Typography.Body size="large">
          Body Large — 正文大号文本，用于较长的阅读内容。
        </Typography.Body>
        <Typography.Body size="medium">
          Body Medium — 正文中等文本，默认尺寸，适合大多数段落。
        </Typography.Body>
        <Typography.Body size="small">
          Body Small — 正文小号文本，用于辅助说明或紧凑排版。
        </Typography.Body>
      </section>

      <section>
        <Typography.Title size="large" style={{ marginBottom: 12 }}>
          Label
        </Typography.Title>
        <Typography.Label size="large">Label Large</Typography.Label>
        <Typography.Label size="medium">Label Medium</Typography.Label>
        <Typography.Label size="small">Label Small</Typography.Label>
      </section>
    </div>
  ),
};
