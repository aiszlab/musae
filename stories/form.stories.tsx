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

                        <IconButton size="xsmall" onClick={() => add(field)}>
                          +
                        </IconButton>

                        <IconButton size="xsmall" onClick={() => remove(field)}>
                          -
                        </IconButton>
                      </div>
                    );
                  })}

                  <Button onClick={() => add()}>在底部新增</Button>
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
