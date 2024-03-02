import type { Meta, StoryObj } from "@storybook/react";
import ConfettiButton from "../components/confetti/confetti";

const meta = {
  title: "Confetti",
  component: ConfettiButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof ConfettiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    animationDuration: 4,
    shapes: ["square", "triangle", "circle"],
    colorDigit: "ABCDEF1234567890",
    confettiQuantity: 190,
  },
};
