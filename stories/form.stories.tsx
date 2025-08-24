import type { Meta, StoryObj } from "@storybook/react";
import { Button, Form, Grid, Input } from "../dist";
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
          <Form
            defaultValue={formValue}
            onChange={(_names, _value) => {
              setFormValue(_value);
            }}
          >
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
    return (
      <Form>
        <Form.List name="items">
          {({ fields, add }) => {
            return (
              <>
                {fields.map((field) => {
                  return (
                    <div>
                      <Form.List.Item key={field} field={field}>
                        <Form.Item name="name">
                          <Input />
                        </Form.Item>
                      </Form.List.Item>
                    </div>
                  );
                })}

                <Button onClick={add}>add</Button>
              </>
            );
          }}
        </Form.List>
      </Form>
    );
  },
};
