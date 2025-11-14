'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const TextReveal = ({
  text,
  revealText,
  className
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const containerRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // compute bounding rect on demand (inside handlers) to avoid stale values
  const updateWidthFromClientX = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const pct = (relativeX / rect.width) * 100;
    // clamp 0..100
    setWidthPercentage(Math.max(0, Math.min(100, pct)));
  };

  const mouseMoveHandler = (event) => {
    // event may be synthetic; use native clientX
    const clientX = event.clientX ?? (event.touches && event.touches[0]?.clientX);
    if (typeof clientX === 'number') updateWidthFromClientX(clientX);
  };

  const touchMoveHandler = (event) => {
    if (!event.touches || event.touches.length === 0) return;
    const clientX = event.touches[0].clientX;
    updateWidthFromClientX(clientX);
  };

  const mouseEnterHandler = (e) => {
    setIsMouseOver(true);
    // immediately update width so reveal appears under pointer
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (typeof clientX === 'number') updateWidthFromClientX(clientX);
  };

  const mouseLeaveHandler = () => {
    setIsMouseOver(false);
    setWidthPercentage(0);
  };

  // Ensure the outer wrapper is inline-block so it takes the same inline size as parent text
  // and both the base & reveal inherit parent font/line-height.
  return (
    <div
      ref={containerRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={(e) => {
        setIsMouseOver(true);
        if (e.touches && e.touches[0]) updateWidthFromClientX(e.touches[0].clientX);
      }}
      onTouchEnd={() => {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      onTouchMove={touchMoveHandler}
      className={cn('relative inline-block overflow-hidden cursor-pointer', className)}
      // prevent accidental selection while dragging
      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
    >
      {/* Reveal layer — sits on top, inherits text styles so size/line-height match exactly */}
      <motion.span
        className="absolute inset-0 z-20 text-inherit font-inherit leading-inherit tracking-inherit whitespace-nowrap pointer-events-none"
        style={{ display: 'inline-block' }}
        animate={
          // animate clipPath based on current percentage; when not hovered we hide fully
          isMouseOver
            ? { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
            : { clipPath: `inset(0 100% 0 0)` }
        }
        transition={{ ease: 'linear', duration: 0 }}
      >
        {revealText}
      </motion.span>

      {/* Base text layer — inherits parent font-size/weight/etc */}
      <span className="block text-inherit font-inherit leading-inherit tracking-inherit whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};
