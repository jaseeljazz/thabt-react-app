import React from "react";
import { Link } from "react-router-dom";
import { LOGO_SRC } from "../data/logoData";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white/70" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <img src={LOGO_SRC} alt="Thabt logo" className="h-9 w-auto object-contain" />
            <p className="text-white/50 text-sm mt-4 max-w-xs leading-relaxed">
              Thabt is a Qatar-based provider of precision vehicle mounting solutions, trusted by clients across the GCC for both
              commercial and personal applications.
            </p>
            <form className="mt-6 max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="text-white text-sm font-semibold">
                Subscribe for updates
              </label>
              <div className="mt-2.5 flex border border-white/20 focus-within:border-[#EFCF25] transition-colors">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/35"
                />
                <button type="submit" className="px-4 text-[#EFCF25] font-semibold text-sm hover:bg-white/5 transition-colors">
                  Join
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Leather Mount", "Motorbike Mount", "Antenna & Accessories", "Mounting Accessories", "Device Holders"].map((l) => (
                <li key={l}>
                  <Link to={`/products?category=${encodeURIComponent(l)}`} className="hover:text-[#EFCF25] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">Address</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                Unit 16, Building 419, Street 990
                <br />
                Zone 32, Old Rayan, Doha, Qatar
              </li>
              <li>+974 4483 2431</li>
              <li>info@thabt.qa</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">Support</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about#faqs" className="hover:text-[#EFCF25] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#EFCF25] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#EFCF25] transition-colors">
                  Returns &amp; warranty
                </Link>
              </li>
              <li>
                <a href="mailto:info@thabt.qa" className="hover:text-[#EFCF25] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/40 text-xs">© 2026 Thabt. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-[#EFCF25] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="X / Twitter" className="hover:text-[#EFCF25] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 3H21l-6.6 7.5L22 21h-6.1l-4.8-6-5.5 6H3l7.1-8-7.5-10h6.3l4.3 5.6L18.9 3Z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-[#EFCF25] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 21l1.4-4.2A8.5 8.5 0 1 1 8 19.6L3 21Z" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-[#EFCF25] transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-[#EFCF25] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
