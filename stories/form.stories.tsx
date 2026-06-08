import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Form, Grid, IconButton, Input } from "../dist";
import React, { Fragment, useState } from "react";

const meta: Meta<typeof Form> = {
  title: "form",
  component: Form,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <Fragment>
        <Form.Item label="username" name="username">
          <Input />
        </Form.Item>
      </Fragment>
    ),
  },
};

/**
 * 受控表单
 */
export const Controlled: Story = {
  args: {
    defaultValue: {
      username: "admin",
    },
    children: (
      <Grid.Row>
        <Grid.Col span={12}>
          <Form.Item label="username" name="username">
            <Input />
          </Form.Item>
        </Grid.Col>
        <Grid.Col span={12}>
          <Form.Item label="username" name="username">
            <Input />
          </Form.Item>
        </Grid.Col>
      </Grid.Row>
    ),
  },
  render: () => {
    interface FormValue {
      username: string;
    }

    const [formValue, setFormValue] = useState<Partial<FormValue>>({ username: "murukal" });

    return (
      <Grid.Row gutter={20}>
        <Grid.Col span={12}>
          <Form defaultValue={formValue} onChange={setFormValue}>
            <Form.Item label="username" name="username">
              <Input />
            </Form.Item>
          </Form>
        </Grid.Col>
        <Grid.Col span={12}>
          <Form value={formValue}>
            <Form.Item label="username" name="username">
              <Input disabled />
            </Form.Item>
          </Form>
        </Grid.Col>
      </Grid.Row>
    );
  },
};

/**
 * 重置表单
 *
 * 通过 `Form.useForm` 创建表单实例，调用 `reset` 方法将表单数据重置为默认值
 */
export const Reset: Story = {
  render: () => {
    interface FormValue {
      username: string;
      email: string;
      nickname: string;
    }

    const form = Form.useForm<FormValue>({
      defaultValue: {
        username: "murukal",
        email: "tutu@fantufantu.com",
      },
    });

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Form form={form}>
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item label="昵称" name="nickname">
            <Input placeholder="请输入昵称" />
          </Form.Item>
        </Form>

        <div style={{ display: "flex", gap: 8 }}>
          <Button
            onClick={() => {
              form.reset();
            }}
          >
            重置表单
          </Button>
          <Button
            onClick={() => {
              form.clear();
            }}
          >
            清空表单
          </Button>
          <Button
            onClick={() => {
              form.setFieldsValue({
                username: "张三",
                email: "zhangsan@example.com",
                nickname: "小张",
              });
            }}
          >
            设置新值
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * 动态添加表单项
 */
export const FormList: Story = {
  render: () => {
    interface FormValue {
      items: { name: string }[];
    }

    const [formValue, setFormValue] = useState<Partial<FormValue>>();

    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Form<FormValue> onChange={(value) => setFormValue(value)}>
          <Form.List name="items">
            {({ fields, add, remove }) => {
              return (
                <>
                  {fields.map((field) => {
                    return (
                      <div key={field} style={{ display: "flex", gap: 8 }}>
                        <Form.List.Item field={field}>
                          <Form.Item name="name">
                            <Input />
                          </Form.Item>
                        </Form.List.Item>

                        <IconButton
                          size="xsmall"
                          onClick={() => {
                            add(field);
                          }}
                        >
                          +
                        </IconButton>

                        <IconButton size="xsmall" onClick={() => remove(field)}>
                          -
                        </IconButton>
                      </div>
                    );
                  })}

                  <Button
                    onClick={() => {
                      add();
                    }}
                  >
                    在底部新增
                  </Button>
                </>
              );
            }}
          </Form.List>
        </Form>

        <div>{JSON.stringify(formValue)}</div>
      </div>
    );
  },
};
