import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

const SHIPPING_FLAT = 15;
const FREE_SHIPPING_THRESHOLD = 250;

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "Doha",
  zone: "",
  notes: "",
  payment: "cod",
};

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState(emptyForm);
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const lines = Object.entries(items)
    .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === id), qty }))
    .filter((line) => line.product);

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const shipping = lines.length === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "TH-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="pt-32 pb-24 max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[#EFCF25] grid place-items-center mx-auto">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2.5">
            <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl mt-6">Order confirmed</h1>
        <p className="text-[#6B6B65] mt-3">
          Thanks, {form.fullName.split(" ")[0] || "there"} — order <span className="font-semibold text-[#121212]">{orderId}</span> has
          been placed. A confirmation has been sent to {form.email || "your email"}.
        </p>
        <p className="text-[#6B6B65] mt-1">Total charged: {total.toFixed(2)} QAR · Payment: {form.payment === "cod" ? "Cash on delivery" : "Card"}</p>
        <Link
          to="/"
          className="glow-btn inline-block mt-8 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-[#121212] hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="pt-32 pb-16 sm:pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      <h1 className="font-display text-3xl sm:text-4xl mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-semibold text-lg mb-4">Contact &amp; delivery</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium block mb-1.5" htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  required
                  value={form.fullName}
                  onChange={update("fullName")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+974"
                  value={form.phone}
                  onChange={update("phone")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium block mb-1.5" htmlFor="address">Street address</label>
                <input
                  id="address"
                  required
                  value={form.address}
                  onChange={update("address")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" htmlFor="city">City</label>
                <input
                  id="city"
                  required
                  value={form.city}
                  onChange={update("city")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" htmlFor="zone">Zone / Area</label>
                <input
                  id="zone"
                  value={form.zone}
                  onChange={update("zone")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium block mb-1.5" htmlFor="notes">Delivery notes (optional)</label>
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={update("notes")}
                  className="w-full border border-[#E5E2D8] px-4 py-3 text-[15px] outline-none focus:border-[#EFCF25] transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-4">Payment</h2>
            <div className="space-y-3">
              <label
                className={`flex items-center gap-3 border px-4 py-3.5 cursor-pointer transition-colors ${
                  form.payment === "cod" ? "border-[#EFCF25]" : "border-[#E5E2D8]"
                }`}
              >
                <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={update("payment")} />
                <span className="text-[15px]">Cash on delivery</span>
              </label>
              <label
                className={`flex items-center gap-3 border px-4 py-3.5 cursor-pointer transition-colors ${
                  form.payment === "card" ? "border-[#EFCF25]" : "border-[#E5E2D8]"
                }`}
              >
                <input type="radio" name="payment" value="card" checked={form.payment === "card"} onChange={update("payment")} />
                <span className="text-[15px]">Credit / debit card</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F4] p-6 h-fit">
          <h2 className="font-semibold text-lg mb-5">Order summary</h2>
          <div className="divide-y divide-[#E5E2D8]/60 mb-4">
            {lines.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-3 py-3">
                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-xs text-[#6B6B65]">Qty {qty}</p>
                </div>
                <span className="text-sm font-semibold shrink-0">{(product.price * qty).toFixed(2)} QAR</span>
              </div>
            ))}
          </div>
          <div className="space-y-2.5 text-sm border-t border-[#E5E2D8] pt-4">
            <div className="flex justify-between">
              <span className="text-[#6B6B65]">Subtotal</span>
              <span>{subtotal.toFixed(2)} QAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B6B65]">Shipping</span>
              <span>{shipping === 0 ? "Free" : `${shipping.toFixed(2)} QAR`}</span>
            </div>
          </div>
          <div className="flex justify-between border-t border-[#E5E2D8] mt-4 pt-4 font-semibold text-base">
            <span>Total</span>
            <span>{total.toFixed(2)} QAR</span>
          </div>
          <button
            type="submit"
            className="glow-btn w-full mt-6 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-[#121212] hover:text-white transition-colors"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
