import type { Meta, StoryObj } from "@storybook/react";
import { Button, Form, Input } from "../dist";
import React, { Fragment } from "react";

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
 * @description 动态添加表单项
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
