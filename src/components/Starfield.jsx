// src/components/Starfield.jsx
import { useEffect, useRef } from "react";

const Starfield = ({ starCount = 300 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: starCount }).map(() => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
      size: Math.random() * 1.5 + 0.5,
    }));

    const speed = 20; // star movement speed

    const animate = () => {
      ctx.fillStyle = "#000"; // black background
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);

      stars.forEach((star) => {
        star.z -= speed * 0.05;
        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }

        const k = 500 / star.z;
        const x = star.x * k;
        const y = star.y * k;
        const size = star.size * k * 0.5;

        ctx.fillStyle = "white";
        ctx.fillRect(x, y, size, size);
      });

      ctx.restore();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-50"
    />
  );
};

export default Starfield;
