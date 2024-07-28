import React, { useEffect, useRef } from "react";

const StarryBackground = ({ landing }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const stars = [];
    const numStars = 30;
    const maxStarSize = 1.5;
    const speed = 0.3;

    // Resize the canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to create stars
    const createStars = () => {
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * maxStarSize;
        const speedX = Math.random() * speed - speed / 2;
        const speedY = Math.random() * speed - speed / 2;

        stars.push({ x, y, size, speedX, speedY });
      }
    };

    // Function to animate stars
    const animateStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
      });

      requestAnimationFrame(animateStars);
    };

    createStars();
    animateStars();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0;
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${
        !landing ? "absolute bg-black" : "fixed"
      } top-0 left-0 w-full h-full z-0  `}
      // className={`absolute top-0 left-0 w-full h-full -z-20 bg-black `}
    />
  );
};

export default StarryBackground;
