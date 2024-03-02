# happy-animation

## Description

happy-animation is an open-source React library that provides cool and happy animations, such as confetti. Currently, it includes a ConfettiButton component for creating confetti effects with various customization options.

## Installation

You can install the package using npm:

```
npm install happy-animation
```

or using yarn:

```
yarn add happy-animation
```

## Usage

### Confetti Component

```
import React from "react";
import { ConfettiButton } from "happy-animation";

const YourComponent = () => {
  return (
    <div>
      {/* Customized ConfettiButton */}
      <ConfettiButton
        shapes={["square", "triangle", "circle", "star", "heart"]}
        animationDuration={4}
        buttonDesign={<YourCustomButtonComponent />}
        colorDigit="ABCDEF1234567890"
        confettiQuantity={50}
      />

      {/* Default ConfettiButton */}
      <ConfettiButton />
    </div>
  );
};
```

#### Props

- shapes: Array of shapes for confetti (default: ["square", "triangle", "circle", "star", "heart"]).
- animationDuration: Duration of the confetti animation in seconds (default: 4).
- buttonDesign: Custom design for the confetti button.
- colorDigit: Custom color digit for confetti (default: "ABCDEF1234567890").
- confettiQuantity: Number of confetti pieces to generate (default: 50).

## Example

Visit our demo page to see happy-animation in action!

## Contributing

We welcome contributions! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.
