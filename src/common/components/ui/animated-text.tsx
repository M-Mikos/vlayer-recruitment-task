"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.05, duration: 0.2 }}
          style={{ display: "inline-block", marginRight: "0.15em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
