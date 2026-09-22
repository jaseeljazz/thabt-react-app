import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_SRC } from "../data/logoData";
import { useCart } from "../context/CartContext";
import SearchModal from "./SearchModal";

const NAV_LINKS = [
  { label: "Leather Mount", to: "/products?category=Leather%20Mount" },
  { label: "Motorbike Mount", to: "/products?category=Motorbike%20Mount" },
  { label: "Antenna & Accessories", to: "/products?category=Antenna%20%26%20Accessories" },
  { label: "Device Holders", to: "/products?category=Device%20Holders" },
  { label: "Pro Clips", to: "/products?category=Pro%20Clips" },
  { label: "About Us", to: "/about" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, wishlistCount, openDrawer } = useCart();

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#121212]/95 backdrop-blur-xl text-white"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="h-20 flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Thabt — home">
              <img src={LOGO_SRC} alt="Thabt logo" className="h-10 w-auto object-contain" />
            </Link>

            <nav className="hidden xl:flex items-center gap-7 text-[14px] text-white/75" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <Link key={l.label} to={l.to} className="hover:text-[#EFCF25] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
              </button>

              <Link
                to="/cart"
                aria-label="Wishlist"
                className="relative w-10 h-10 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                </svg>
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#EFCF25] text-[#121212] text-[10px] font-bold grid place-items-center">
                  {wishlistCount}
                </span>
              </Link>

              <button
                type="button"
                onClick={openDrawer}
                aria-label="Open cart"
                className="relative w-10 h-10 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path
                    d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="10" cy="21" r="1.4" />
                  <circle cx="18" cy="21" r="1.4" />
                </svg>
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#EFCF25] text-[#121212] text-[10px] font-bold grid place-items-center">
                  {cartCount}
                </span>
              </button>

              <a
                href="#"
                className="hidden sm:inline-flex items-center text-[14px] font-medium border border-white/25 rounded-full px-4 py-2 hover:border-[#EFCF25] hover:text-[#EFCF25] transition-colors"
              >
                Login
              </a>

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileNavOpen((v) => !v)}
                className="xl:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileNavOpen && (
          <nav className="xl:hidden border-t border-white/10 bg-[#121212] text-white" aria-label="Mobile">
            <div className="px-5 py-4 flex flex-col gap-1 text-[15px]">
              {NAV_LINKS.map((l, i) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMobileNavOpen(false)}
                  className={`py-2.5 ${i < NAV_LINKS.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
