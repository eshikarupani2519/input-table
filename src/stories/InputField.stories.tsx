import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../components/InputField/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// ✅ Default example
export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Type here...",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

// ✅ Variants
export const Filled: Story = {
  args: {
    label: "Filled Variant",
    placeholder: "Type here...",
    variant: "filled",
    helperText: "Filled input",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Variant",
    placeholder: "Type here...",
    variant: "outlined",
    helperText: "Outlined input",
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost Variant",
    placeholder: "Type here...",
    variant: "ghost",
    helperText: "Ghost input",
  },
};

// ✅ Sizes
export const Small: Story = {
  args: {
    label: "Small Input",
    placeholder: "Type here...",
    size: "sm",
    helperText: "Small size",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Input",
    placeholder: "Type here...",
    size: "md",
    helperText: "Medium size",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    placeholder: "Type here...",
    size: "lg",
    helperText: "Large size",
  },
};

// ✅ Password example with toggle
export const Password: Story ={
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    helperText: "At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special",
  },
};

// ✅ Clearable example
export const Clearable: Story = {
  args: {
    label: "Clearable Input",
    placeholder: "Type something...",
  },
};

// ✅ Invalid state
export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email format",
  },
};
