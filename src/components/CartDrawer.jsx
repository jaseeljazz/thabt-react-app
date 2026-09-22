import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function CartDrawer() {
  const { items, setQty, removeItem, drawerOpen, closeDrawer } = useCart();

  const lines = Object.entries(items)
    .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === id), qty }))
    .filter((line) => line.product);

  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 z-[70] bg-[#121212]/50 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!drawerOpen}
        className={`fixed top-0 right-0 z-[80] h-full w-full sm:w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E2D8] shrink-0">
          <h2 className="font-display text-2xl">Shopping Cart</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="w-9 h-9 grid place-items-center rounded-full hover:bg-[#F7F7F4] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E5E2D8" strokeWidth="1.4">
                <path
                  d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="21" r="1.4" />
                <circle cx="18" cy="21" r="1.4" />
              </svg>
              <p className="text-[#6B6B65]">Your cart is empty.</p>
              <button type="button" onClick={closeDrawer} className="text-sm font-semibold text-[#C9A812] hover:underline">
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-3 bg-[#F7F7F4] p-3">
                  <Link
                    to={`/products/${product.slug}`}
                    onClick={closeDrawer}
                    className="w-16 h-16 shrink-0 overflow-hidden bg-white"
                  >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/products/${product.slug}`}
                        onClick={closeDrawer}
                        className="font-semibold text-sm leading-snug hover:text-[#C9A812] transition-colors"
                      >
                        {product.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                        className="text-[#6B6B65] hover:text-[#121212] transition-colors shrink-0"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path
                            d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.7 12.1a2 2 0 0 1-2 1.9H8.7a2 2 0 0 1-2-1.9L6 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="text-[#C9A812] font-semibold text-sm mt-1">{product.price.toFixed(2)} QAR</p>

                    <div className="flex items-center border border-[#E5E2D8] bg-white mt-2 w-fit">
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="qty-btn w-7 h-7 grid place-items-center text-sm"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm font-semibold">{qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty + 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="qty-btn w-7 h-7 grid place-items-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-[#E5E2D8] p-6 shrink-0">
            <Link
              to="/cart"
              onClick={closeDrawer}
              className="glow-btn flex items-center justify-center gap-2 w-full bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-6 py-3.5 hover:bg-[#121212] hover:text-white transition-colors"
            >
              Go to Cart <span aria-hidden="true">→</span> {total.toFixed(2)} QAR
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}