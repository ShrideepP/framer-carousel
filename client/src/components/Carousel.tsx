import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  children: JSX.Element;
}

export default function Carousel({ children }: CarouselProps) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current?.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      whileTap={{ cursor: 'grabbing' }}
      className="w-full h-fit relative z-10 overflow-x-hidden cursor-grab">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="w-full flex gap-x-4">
        {children}
      </motion.div>
    </motion.div>
  );
}
