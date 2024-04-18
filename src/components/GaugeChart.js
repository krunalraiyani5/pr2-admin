"use client";
import React, { useState, useEffect } from "react";

const GaugeChart = ({ value, color }) => {
  const radius = 50;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Find the nearest three-digit hundred number
    const nearestHundred = Math.ceil(value / 100) * 100;

    // Calculate the percentage
    const percentage = (value / nearestHundred) * 100;

    // Limit the percentage to 100
    const clampedPercentage = Math.min(percentage, 100);

    setProgress(clampedPercentage);
  }, [value]);

  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20">
      {/* Gauge Background */}
      <circle
        cx="50%"
        cy="50%"
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth={strokeWidth}
      />
      {/* Gauge Progress */}
      <circle
        cx="50%"
        cy="50%"
        r={radius - strokeWidth / 2}
        fill="none"
        stroke={color || "#68D391"}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (progress / 100) * circumference + 20}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 1s ease-out",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
      {/* Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-lg font-semibold"
      >
        {value}
      </text>
    </svg>
  );
};

export default GaugeChart;
