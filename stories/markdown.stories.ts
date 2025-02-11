import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "../dist";

const meta: Meta<typeof Markdown> = {
  title: "markdown",
  component: Markdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RichText: Story = {
  args: {
    value: `# Heading1
## Heading2
### Heading3
#### Heading4`,
  },
};
