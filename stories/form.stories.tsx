import type { Meta, StoryObj } from "@storybook/react";
import { Form, Input } from "../dist";
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
