"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, useCallback } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    { left: "5%", duration: 7, repeatDelay: 3, delay: 0, height: "h-12" },
    { left: "15%", duration: 5, repeatDelay: 5, delay: 1, height: "h-8" },
    { left: "25%", duration: 8, repeatDelay: 2, delay: 2, height: "h-16" },
    { left: "35%", duration: 4, repeatDelay: 6, delay: 0.5, height: "h-10" },
    { left: "50%", duration: 6, repeatDelay: 4, delay: 3, height: "h-20" },
    { left: "65%", duration: 9, repeatDelay: 3, delay: 1.5, height: "h-6" },
    { left: "75%", duration: 5, repeatDelay: 7, delay: 4, height: "h-14" },
    { left: "85%", duration: 7, repeatDelay: 2, delay: 2.5, height: "h-10" },
    { left: "95%", duration: 6, repeatDelay: 5, delay: 0, height: "h-8" },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
    >
      {beams.map((beam, index) => (
        <Beam
          key={index}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
      />
    </div>
  );
};

interface BeamOptions {
  left: string;
  duration: number;
  repeatDelay: number;
  delay: number;
  height: string;
}

function Beam({
  beamOptions,
  containerRef,
  parentRef,
}: {
  beamOptions: BeamOptions;
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
}) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  const checkCollision = useCallback(() => {
    if (
      beamRef.current &&
      containerRef.current &&
      parentRef.current &&
      !cycleCollisionDetected
    ) {
      const beamRect = beamRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();

      if (beamRect.bottom >= containerRect.top) {
        const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
        const relativeY = beamRect.bottom - parentRect.top;

        setCollision({
          detected: true,
          coordinates: { x: relativeX, y: relativeY },
        });
        setCycleCollisionDetected(true);
      }
    }
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, [checkCollision]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const timer = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        setBeamKey((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate={{
          translateY: ["-200px", "110vh"],
        }}
        transition={{
          duration: beamOptions.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay,
          repeatDelay: beamOptions.repeatDelay,
        }}
        className={cn(
          "absolute w-[2px] rounded-full z-30 pointer-events-none",
          "bg-gradient-to-b from-transparent via-indigo-500 to-purple-500",
          beamOptions.height
        )}
        style={{
          left: beamOptions.left,
          top: 0,
        }}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 1.5 + 0.5,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};