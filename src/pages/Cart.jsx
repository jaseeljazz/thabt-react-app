import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

const SHIPPING_FLAT = 15;
const FREE_SHIPPING_THRESHOLD = 250;

export default function Cart() {
  const { items, setQty, removeItem } = useCart();
  const navigate = useNavigate();

  const lines = Object.entries(items)
    .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === id), qty }))
    .filter((line) => line.product);

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const shipping = lines.length === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;

  if (lines.length === 0) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h1 className="font-display text-3xl sm:text-4xl">Your cart is empty</h1>
        <p className="text-[#6B6B65] mt-3">Browse the catalog and add a mount to get started.</p>
        <Link
          to="/products"
          className="glow-btn inline-block mt-8 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-[#121212] hover:text-white transition-colors"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 sm:pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      <h1 className="font-display text-3xl sm:text-4xl mb-8">Your cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 divide-y divide-[#E5E2D8] border-t border-b border-[#E5E2D8]">
          {lines.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 py-5">
              <Link to={`/products/${product.slug}`} className="w-24 h-24 shrink-0 bg-[#F7F7F4] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </Link>

              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <Link to={`/products/${product.slug}`} className="font-semibold hover:text-[#C9A812] transition-colors">
                    {product.name}
                  </Link>
                  <p className="text-[#6B6B65] text-sm mt-1">{product.category}</p>
                  <p className="text-sm font-semibold mt-1">{product.price.toFixed(2)} QAR</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#E5E2D8]">
                    <button
                      type="button"
                      onClick={() => setQty(product.id, qty - 1)}
                      aria-label={`Decrease quantity of ${product.name}`}
                      className="qty-btn w-9 h-9 grid place-items-center text-lg"
                    >
                      −
                    </button>
                    <span className="w-9 text-center text-sm font-semibold">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(product.id, qty + 1)}
                      aria-label={`Increase quantity of ${product.name}`}
                      className="qty-btn w-9 h-9 grid place-items-center text-lg"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                    className="text-[#6B6B65] hover:text-[#121212] transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.7 12.1a2 2 0 0 1-2 1.9H8.7a2 2 0 0 1-2-1.9L6 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F7F7F4] p-6 h-fit">
          <h2 className="font-semibold text-lg mb-5">Order summary</h2>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B6B65]">Subtotal</span>
              <span>{subtotal.toFixed(2)} QAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B6B65]">Shipping</span>
              <span>{shipping === 0 ? "Free" : `${shipping.toFixed(2)} QAR`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-[#6B6B65]">
                Add {(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} QAR more for free shipping.
              </p>
            )}
          </div>
          <div className="flex justify-between border-t border-[#E5E2D8] mt-4 pt-4 font-semibold text-base">
            <span>Total</span>
            <span>{total.toFixed(2)} QAR</span>
          </div>
          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="glow-btn w-full mt-6 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-[#121212] hover:text-white transition-colors"
          >
            Proceed to Checkout
          </button>
          <Link to="/products" className="block text-center text-sm text-[#6B6B65] hover:text-[#121212] mt-4 transition-colors">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
