import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionSheet, Button, useActionSheet } from "../dist";

const meta: Meta<typeof ActionSheet> = {
  title: "action-sheet",
  component: ActionSheet,
};

export default meta;
type Story = StoryObj<typeof ActionSheet>;

/**
 * @zh 基本操作列表。点击按钮打开 ActionSheet，选择操作后关闭。
 * @en Basic action list. Click button to open ActionSheet, select an action to close.
 */
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open ActionSheet</Button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          actions={[
            { key: "edit", text: "编辑" },
            { key: "delete", text: "删除" },
            { key: "share", text: "分享" },
          ]}
        />
      </div>
    );
  },
};

/**
 * @zh 二次确认场景：带标题、描述和操作回调。
 * @en Confirmation scenario: with title, description and action callbacks.
 */
export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState("");

    return (
      <div style={{ padding: 16 }}>
        <p style={{ marginBottom: 16 }}>{result || "点击按钮进行二次确认"}</p>
        <Button onClick={() => setOpen(true)}>删除文件</Button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          title="确认删除"
          description="此操作不可撤销，确定要删除该文件吗？"
          actions={[
            {
              key: "confirm",
              text: "确认删除",
              onClick: () => setResult("文件已删除"),
            },
          ]}
        />
      </div>
    );
  },
};

/**
 * @zh 带操作描述的 ActionSheet。
 * @en ActionSheet with action descriptions.
 */
export const WithDescriptions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>上传图片</Button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          title="选择上传方式"
          actions={[
            {
              key: "camera",
              text: "拍照",
              description: "使用相机拍摄照片",
              onClick: () => alert("打开相机"),
            },
            {
              key: "album",
              text: "从相册选择",
              description: "从手机相册中选取图片",
              onClick: () => alert("打开相册"),
            },
          ]}
        />
      </div>
    );
  },
};

/**
 * @zh 自定义取消按钮文案。
 * @en Custom cancel button text.
 */
export const CustomCancel: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          title="退出登录"
          description="确定要退出当前账号吗？"
          cancelText="暂不退出"
          actions={[
            {
              key: "logout",
              text: "退出登录",
              onClick: () => alert("已退出"),
            },
          ]}
        />
      </div>
    );
  },
};

/**
 * @zh 长操作列表，面板内容可滚动。
 * @en Long action list with scrollable panel content.
 */
export const LongList: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const actions = Array.from({ length: 8 }, (_, i) => ({
      key: `action-${i}`,
      text: `操作项 ${i + 1}`,
      description: i % 3 === 0 ? `这是操作项 ${i + 1} 的描述` : undefined,
    }));

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>打开长操作列表</Button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          title="更多操作"
          actions={actions}
        />
      </div>
    );
  },
};

/**
 * @zh 无标题和描述，纯操作列表。
 * @en No title or description, pure action list.
 */
export const ActionsOnly: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>更多</Button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          actions={[
            { key: "save", text: "保存到相册" },
            { key: "copy-link", text: "复制链接" },
            { key: "report", text: "举报" },
            { key: "block", text: "屏蔽" },
          ]}
        />
      </div>
    );
  },
};

/**
 * @zh `useActionSheet` hook 用法。在组件树中渲染 holder，通过 trigger 调用。
 * @en `useActionSheet` hook usage. Render holder in component tree, call via trigger.
 */
export const UseActionSheetHook: Story = {
  render: () => {
    const [result, setResult] = useState("");
    const [trigger, holder] = useActionSheet();

    const handleOpen = () => {
      trigger.show({
        title: "选择操作",
        actions: [
          {
            key: "save",
            text: "保存",
            onClick: () => setResult("已保存"),
          },
          {
            key: "discard",
            text: "放弃",
            onClick: () => setResult("已放弃"),
          },
        ],
      });
    };

    return (
      <div style={{ padding: 16 }}>
        <p style={{ marginBottom: 16 }}>
          {result || "使用 useActionSheet hook，holder 挂载在组件树中"}
        </p>
        <Button onClick={handleOpen}>Show via Hook</Button>
        {holder}
      </div>
    );
  },
};
