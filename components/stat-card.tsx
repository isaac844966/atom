"use client";

import { useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const getNumericValue = (value: string) => {
    const match = value.match(/(\d+)(.*)/);
    if (match) {
      return {
        number: Number.parseInt(match[1]),
        suffix: match[2],
      };
    }
    return { number: 0, suffix: "" };
  };

  const { number: targetNumber, suffix } = getNumericValue(stat.value);

  useEffect(() => {
    setIsVisible(true);

    if (targetNumber === 0) return;

    const duration = 2000; 
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(
        Math.round(increment * currentStep),
        targetNumber
      );
      setCount(currentValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="text-center group">
      <div
        className={`text-5xl lg:text-6xl font-bold text-[#1AA9B9] mb-4 group-hover:scale-110 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {count}
        {suffix}
      </div>
      <div
        className={`text-lg font-medium text-[#6A767D] transition-all duration-500 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {stat.label}
      </div>
    </div>
  );
}
