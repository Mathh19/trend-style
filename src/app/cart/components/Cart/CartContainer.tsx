'use client';

import { useEffect, useRef, useState } from 'react';

export const CartContainer = ({ children }: { children: React.ReactNode }) => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [hasScroll, setHasScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowEffectScroll =
    "after:content-[''] after:pointer-events-none after:absolute after:w-full after:h-6 after:bg-gradient-to-t after:from-white after:from-55% after:to-transparent after:bottom-0 after:animate-fade-in-slowly";

  const handleScroll = () => {
    const divElement = containerRef.current;
    if (divElement) {
      setIsScrolledToTop(divElement.scrollTop === 0);
    }
  };

  useEffect(() => {
    const divElement = containerRef.current;
    if (divElement) {
      divElement.addEventListener('scroll', handleScroll);
      setHasScroll(divElement.clientHeight >= 520);
      return () => divElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative space-y-3.5 max-h-[520px] overflow-y-auto ${
        hasScroll && isScrolledToTop && shadowEffectScroll
      }`}
    >
      {children}
    </div>
  );
};
