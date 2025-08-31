import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../components/InputField/Form";

const meta: Meta<typeof Form> = {
  title: "Form/CompleteForm",
  component: Form,
  argTypes: {
    mode: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    mode: "light",
  },
};

export const DarkMode: Story = {
  args: {
    mode: "dark",
  },
};
