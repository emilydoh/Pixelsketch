import React, { useEffect, useRef } from 'react';

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvasSize: number;
  colors: { color: string; index: number }[];
}

const Canvas: React.FC<CanvasProps> = ({ canvasRef, canvasSize, colors }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        const pixelSize = canvasSize / Math.sqrt(colors.length);
        colors.forEach((pixel) => {
          const x = (pixel.index % Math.sqrt(colors.length)) * pixelSize;
          const y = Math.floor(pixel.index / Math.sqrt(colors.length)) * pixelSize;
          ctx.fillStyle = pixel.color;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        });
      }
    }
  }, [canvasSize, colors, canvasRef]);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

const CanvasWrapper: React.FC<CanvasProps> = ({ canvasSize, colors }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return <Canvas canvasRef={canvasRef} canvasSize={canvasSize} colors={colors} />;
};

export default CanvasWrapper;
