import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-all duration-300 ${
            isHovering ? 'w-12 h-12 border-foreground/50' : 'w-8 h-8 border-foreground/20'
          }`}
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          }}
        />
        <div
          className={`w-1 h-1 rounded-full bg-foreground absolute top-1/2 left-1/2 transition-all duration-300 ${
            isHovering ? 'w-2 h-2' : 'w-1 h-1'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </>
  );
}
