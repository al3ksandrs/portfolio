"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
}

export default function SlideIn({ children }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyVisible) {
      setVisible(true);
      return;
    }

    setAnimate(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${animate ? "transition-all duration-700 ease-out" : ""} ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
    >
      {children}
    </div>
  );
}
