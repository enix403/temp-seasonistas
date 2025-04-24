"use client";

import { useRef } from "react";
import { useState, useEffect } from "react";

export function useContaineirScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // Track scroll position to add shadow when scrolled past hero section
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Approximate height of the hero section (adjust as needed)
      // const heroHeight = 600;
      // setScrolled(scrollContainer.scrollTop > heroHeight);
      setScrollTop(scrollContainer.scrollTop);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return [scrollContainerRef, scrollTop] as const;
}