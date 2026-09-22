import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getProductBySlug, PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import { WishlistButton } from "../components/UIBits";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem, wishlist, toggleWishlist } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return <Navigate to="/products" replace />;

  const isWishlisted = !!wishlist[product.id];
  const stars = "★★★★★".slice(0, product.rating) + "☆☆☆☆☆".slice(0, 5 - product.rating);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="pt-32 pb-16 sm:pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      <p className="text-sm text-[#6B6B65] mb-8">
        <Link to="/" className="hover:text-[#C9A812] transition-colors">
          Home
        </Link>{" "}
        /{" "}
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#C9A812] transition-colors">
          {product.category}
        </Link>{" "}
        / <span className="text-[#121212]">{product.name}</span>
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bracket relative bg-[#F7F7F4] overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover aspect-square" />
          <span className="bk-tl" /><span className="bk-tr" /><span className="bk-bl" /><span className="bk-br" />
          <span className="absolute top-4 left-4 bg-[#EFCF25] text-[#121212] text-[11px] font-semibold px-2.5 py-1">
            {product.category}
          </span>
          <WishlistButton active={isWishlisted} onToggle={() => toggleWishlist(product.id)} />
        </div>

        <div>
          <div className="text-[#EFCF25] text-sm" aria-hidden="true">
            {stars} <span className="text-[#6B6B65]">({product.reviews} reviews)</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl mt-3">{product.name}</h1>
          <p className="text-[#6B6B65] text-sm mt-2">
            Item #{product.sku}
            {product.preorder ? " · Pre-order" : ""}
          </p>
          <p className="text-2xl font-semibold mt-5">{product.price.toFixed(2)} QAR</p>

          <p className="text-[#121212]/75 mt-6 leading-relaxed">{product.description}</p>

          <div className="mt-6 border-t border-[#E5E2D8] pt-6">
            <h2 className="font-semibold text-sm mb-3">Compatibility</h2>
            <p className="text-[#6B6B65] text-sm">{product.compatibility}</p>
          </div>

          <div className="mt-6 border-t border-[#E5E2D8] pt-6">
            <h2 className="font-semibold text-sm mb-3">Features</h2>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#121212]/75">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EFCF25] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-[#E5E2D8]">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="qty-btn w-10 h-11 grid place-items-center text-lg"
              >
                −
              </button>
              <span className="w-10 text-center text-[15px] font-semibold">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="qty-btn w-10 h-11 grid place-items-center text-lg"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`glow-btn flex-1 font-semibold text-[15px] px-8 py-3.5 transition-colors ${
                justAdded ? "bg-[#121212] text-white" : "bg-[#EFCF25] text-[#121212] hover:bg-[#121212] hover:text-white"
              }`}
            >
              {justAdded ? "Added to cart" : "Add to Cart"}
            </button>
          </div>

          {justAdded && (
            <p className="text-sm text-[#6B6B65] mt-3">
              <Link to="/cart" className="text-[#C9A812] font-semibold hover:underline">
                View cart
              </Link>{" "}
              to check out.
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl sm:text-3xl mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
