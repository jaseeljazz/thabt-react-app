import React, { useState } from "react";

export function WishlistButton({ active, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Add to wishlist"
      onClick={onToggle}
      className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur grid place-items-center"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={active ? "#EFCF25" : "none"}
        stroke={active ? "#EFCF25" : "#121212"}
        strokeWidth="1.8"
      >
        <path d="M12 20s-7.5-4.7-10-9.3C.4 7.1 2.2 3.6 5.7 3c2-.3 3.8.6 5 2.3.8-1.5 2.7-2.6 5-2.3 3.5.6 5.3 4.1 3.7 7.7C19.5 15.3 12 20 12 20Z" />
      </svg>
    </button>
  );
}

export function AddToCartButton({ onAdd, full = false }) {
  const [added, setAdded] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        onAdd();
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
      className={`glow-btn text-sm font-semibold px-4 py-2 transition-colors ${full ? "w-full py-3.5 text-[15px]" : ""} ${
        added ? "bg-[#121212] text-white" : "bg-[#EFCF25] text-[#121212] hover:bg-[#121212] hover:text-white"
      }`}
    >
      {added ? "Added" : "Add to Cart"}
    </button>
  );
}

export function TickRing({ className = "" }) {
  const angles = [-70, -63, -56, -49, -42, -35, -28, -21, -14, -7, 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
  return (
    <svg
      className={`tick-ring hidden md:block opacity-40 ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g stroke="#121212" strokeWidth="1.2">
        {angles.map((deg, i) => (
          <line
            key={deg}
            x1="1080"
            y1="40"
            x2="1080"
            y2="72"
            transform={`rotate(${deg} 1080 420)`}
            opacity={i % 2 === 0 ? 0.25 : 0.5}
          />
        ))}
        <circle cx="1080" cy="420" r="330" fill="none" opacity="0.15" />
      </g>
    </svg>
  );
}
