import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../components/InputField/Form";

const meta: Meta<typeof Form> = {
  title: "Form/CompleteForm",
  component: Form,
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};
