import React, { useState, useEffect, useRef } from "react";
import "./confetti.css";
import { ConfettiProps } from "./types";

const ConfettiButton: React.FC<ConfettiProps> = ({
  shapes,
  duration,
  buttonDesign,
  colorDigit,
  confettiQuantity,
}) => {
  const SHAPES = shapes || ["square", "triangle", "circle"];
  const COLOR_DIGIT = "ABCDEF1234567890" || colorDigit;
  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
  };

  const generateConfetti = () => {
    const container = containerRef.current as unknown as HTMLDivElement;
    if (container) {
      if (confettiQuantity) {
        for (let i = 0; i < confettiQuantity; i++) {
          const confetti = document.createElement("div");
          const positionX = Math.random() * window.innerWidth;
          const positionY = Math.random() * window.innerHeight;
          const rotation = Math.random() * 360;
          const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Set confetti styles
          confetti.style.left = `${positionX}px`;
          confetti.style.top = `${positionY}px`;
          confetti.style.transform = `rotate(${rotation}deg)`;
          confetti.className =
            "confetti " + SHAPES[Math.floor(Math.random() * 3)];
          confetti.style.width = `${size}px`;
          confetti.style.height = `${size}px`;
          confetti.style.backgroundColor = generateRandomColor(); // Append confetti to the container
          container.appendChild(confetti);
          // Remove confetti element after animation duration (4 seconds)
          setTimeout(() => {
            container.removeChild(confetti);
          }, 4000);
        }
      } else {
        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement("div");
          const positionX = Math.random() * window.innerWidth;
          const positionY = Math.random() * window.innerHeight;
          const rotation = Math.random() * 360;
          const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Set confetti styles
          confetti.style.left = `${positionX}px`;
          confetti.style.top = `${positionY}px`;
          confetti.style.transform = `rotate(${rotation}deg)`;
          confetti.className =
            "confetti " + SHAPES[Math.floor(Math.random() * 3)];
          confetti.style.width = `${size}px`;
          confetti.style.height = `${size}px`;
          confetti.style.backgroundColor = generateRandomColor(); // Append confetti to the container
          container.appendChild(confetti);
          // Remove confetti element after animation duration (4 seconds)
          setTimeout(() => {
            container.removeChild(confetti);
          }, 4000);
        }
      }
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
    }, duration || 4000);
  };

  return (
    <div>
      {buttonDesign ? (
        <button className="confetti-button" onClick={handleClick}>
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
      ></div>
    </div>
  );
};

export default ConfettiButton;
