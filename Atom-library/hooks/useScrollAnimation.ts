"use client";

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const elements = ref.current?.children;
    if (elements) {
      Array.from(elements).forEach((element) => {
        element.classList.add('opacity-0');
        observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
