import { ReactNode } from "react";

export type Shapes = "square" | "triangle" | "circle" | "star" | "heart";

export type ConfettiProps = {
  shapes: Shapes[];
  buttonDesign: ReactNode;
  colorDigit: string;
  confettiQuantity: number;
  buttonText: string;
  animationDuration: number;
};
