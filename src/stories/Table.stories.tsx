import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../components/DataTable/Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const LightMode: Story = {
  args: {
    mode: "light",
  },
};

export const DarkMode: Story = {
  args: {
    mode: "dark",
  },
};
