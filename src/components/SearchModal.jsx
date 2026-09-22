import React from "react";

export default function SearchModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-[#121212]/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-w-2xl mx-auto mt-28 px-5">
        <div className="bg-white border border-[#E5E2D8] p-2 flex items-center gap-3">
          <svg className="ml-3 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B6B65" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Search mounts, e.g. “Toyota Land Cruiser dashboard mount”"
            className="flex-1 py-3.5 outline-none text-[15px] bg-transparent"
          />
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="w-10 h-10 mr-1 grid place-items-center rounded-full hover:bg-[#F7F7F4] shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
