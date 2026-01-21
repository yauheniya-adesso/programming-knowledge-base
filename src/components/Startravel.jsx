import React, { useEffect, useRef } from 'react';

const Startravel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth || window.innerWidth;
      canvas.height = parent?.clientHeight || window.innerHeight;

      // Check if mobile
      const isMobile = canvas.width < 768;
      const sizeMultiplier = isMobile ? 0.5 : 1;

      // Reinitialize stars on resize
      stars = [];
      for (let i = 0; i < 10000; i++) {
        stars.push(createStar(sizeMultiplier));
      }
    };

    const colors = ['#FF9868', '#F566BA', '#ffffff', '#006EC7'];

    // Create initial stars
    const createStar = (sizeMultiplier = 1) => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: (Math.random() * 0.025 + 0.04) * sizeMultiplier,
      };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, '#0a0a1a');
      gradient.addColorStop(0.5, '#000000');
      gradient.addColorStop(1, '#0a0520');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star, index) => {
        // Move star towards viewer
        star.z -= 8;

        // Reset star if it's too close
        if (star.z <= 0) {
          const isMobile = canvas.width < 768;
          const sizeMultiplier = isMobile ? 0.5 : 1;
          stars[index] = createStar(sizeMultiplier);
          return;
        }

        // Calculate perspective
        const x = (star.x - canvas.width / 2) * (canvas.width / star.z);
        const y = (star.y - canvas.height / 2) * (canvas.width / star.z);
        const size = star.size * (canvas.width / star.z);

        // Only draw if within canvas bounds
        if (
          x + canvas.width / 2 > 0 &&
          x + canvas.width / 2 < canvas.width &&
          y + canvas.height / 2 > 0 &&
          y + canvas.height / 2 < canvas.height
        ) {
          // Draw star with subtle glow effect
          const opacity = Math.min(1, (canvas.width - star.z) / canvas.width);

          // Outer glow (smaller for performance)
          ctx.beginPath();
          ctx.arc(
            x + canvas.width / 2,
            y + canvas.height / 2,
            size * 1.5,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `${star.color}30`;
          ctx.fill();

          // Inner bright star
          ctx.beginPath();
          ctx.arc(
            x + canvas.width / 2,
            y + canvas.height / 2,
            size,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default Startravel;