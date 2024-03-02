import { ReactNode } from "react";

export type Shapes = "square" | "triangle" | "circle";

export type ConfettiProps = {
  shapes: Shapes[];
  duration: number;
  buttonDesign: ReactNode;
  colorDigit: string;
  confettiQuantity: number;
};
