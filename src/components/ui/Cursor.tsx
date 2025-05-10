import React from 'react';

interface CursorProps {
  position: { x: number; y: number };
  hovered: boolean;
}

const Cursor: React.FC<CursorProps> = ({ position, hovered }) => {
  return (
    <div className="cursor-container hidden md:block fixed pointer-events-none z-50">
      <div 
        className={`cursor-dot transition-transform duration-100 ${hovered ? 'scale-0' : 'scale-100'}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <div 
        className={`cursor-circle transition-all duration-300 ${hovered ? 'scale-150 bg-opacity-20' : 'scale-100 bg-opacity-50'}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;