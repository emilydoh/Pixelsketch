// Export.tsx
import React from 'react';

interface ExportProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvasSize: number;
  gridSize: number;
}

const Export: React.FC<ExportProps> = ({ canvasRef, canvasSize, gridSize }) => {
  const handleExportClick = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      const ctx = canvas.getContext('2d');

      if (tempCtx && ctx) {
        const pixelSize = canvasSize / Math.sqrt(gridSize);

        tempCanvas.width = Math.sqrt(gridSize) * pixelSize;
        tempCanvas.height = Math.sqrt(gridSize) * pixelSize;

        tempCtx.fillStyle = '#FFFFFF'; // Background color
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        tempCtx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);

        link.href = tempCanvas.toDataURL('image/jpeg');
        link.download = 'canvas.jpg';
        link.click();
      }
    }
  };

  return (
    <button onClick={handleExportClick}>Export as JPG</button>
  );
};

export default Export;
