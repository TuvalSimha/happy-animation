import { Confetti } from "../components/confetti/confetti";
import React from "react";

export default {
  title: "Confetti",
  component: Confetti,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const ConfettiStory = (args) => <Confetti {...args} />;
