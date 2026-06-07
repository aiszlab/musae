import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "../dist";
import dayjs, { type Dayjs } from "dayjs";
import React, { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "calendar",
  component: Calendar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs>();

    return (
      <Calendar
        value={value}
        onClick={(date) => {
          setValue(date);
        }}
      />
    );
  },
};

/**
 * 禁用今天之前的日期
 */
export const DisablePastDates: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs>();

    return (
      <Calendar
        value={value}
        disabledDate={(date) => date.isBefore(dayjs(), "day")}
        onClick={(date) => {
          setValue(date);
        }}
      />
    );
  },
};

/**
 * 禁用周末（周六和周日）
 */
export const DisableWeekends: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs>();

    return (
      <Calendar
        value={value}
        disabledDate={(date) => date.day() === 0 || date.day() === 6}
        onClick={(date) => {
          setValue(date);
        }}
      />
    );
  },
};

/**
 * 禁用指定日期范围（例如 2026-06-10 至 2026-06-20）
 */
export const DisableDateRange: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs>();

    return (
      <Calendar
        value={value}
        disabledDate={(date) =>
          date.isAfter("2026-06-09") && date.isBefore("2026-06-21")
        }
        onClick={(date) => {
          setValue(date);
        }}
      />
    );
  },
};

/**
 * 仅允许选择周一至周三
 */
export const OnlyAllowMonToWed: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs>();

    return (
      <Calendar
        value={value}
        disabledDate={(date) => {
          const day = date.day();
          return day !== 1 && day !== 2 && day !== 3;
        }}
        onClick={(date) => {
          setValue(date);
        }}
      />
    );
  },
};
