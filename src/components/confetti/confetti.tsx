import React, { useState, useEffect, useRef } from "react";
import "./confetti.css";
import { ConfettiProps } from "./types";

const ConfettiButton: React.FC<ConfettiProps> = ({
  shapes,
  animationDuration,
  buttonDesign,
  colorDigit,
  confettiQuantity,
}) => {
  const SHAPES = shapes || ["square", "triangle", "circle", "star", "heart"];
  const generateRandomColor = (color = "ABCDEF1234567890" ?? colorDigit) => {
    return (
      "#" +
      Array.from(
        { length: 6 },
        () => color[Math.floor(Math.random() * color.length)]
      ).join("")
    );
  };

  const generateConfetti = () => {
    const container = containerRef.current as unknown as HTMLElement;

    if (!container) return;

    const numberOfConfetti = confettiQuantity || 50;

    for (let i = 0; i < numberOfConfetti; i++) {
      const confetti = document.createElement("div");
      const positionX = Math.random() * window.innerWidth;
      const positionY = Math.random() * window.innerHeight;
      const rotation = Math.random() * 360;
      const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

      confetti.style.left = `${positionX}px`;
      confetti.style.top = `${positionY}px`;
      confetti.style.transform = `rotate(${rotation}deg)`;
      confetti.className = "confetti " + SHAPES[Math.floor(Math.random() * 3)];
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = generateRandomColor();

      container.appendChild(confetti);

      setTimeout(() => {
        container.removeChild(confetti);
      }, animationDuration * 1000 || 4000);
    }
  };

  const [isConfettiActive, setConfettiActive] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (isConfettiActive) {
      generateConfetti();
    }
  }, [isConfettiActive]);

  const handleClick = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, animationDuration * 1000 || 4000);
  };

  return (
    <div>
      {buttonDesign ? (
        <button
          className={`confetti-button animate-fall-${animationDuration}s`}
          onClick={handleClick}
        >
          {buttonDesign}
        </button>
      ) : (
        <button className="confetti-button" onClick={handleClick}>
          Confetti Button
        </button>
      )}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        ref={containerRef}
        id="confetti-container"
      />
    </div>
  );
};

export default ConfettiButton;
