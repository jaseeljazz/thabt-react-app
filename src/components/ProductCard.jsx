import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { WishlistButton, AddToCartButton } from "./UIBits";

export default function ProductCard({ product }) {
  const { addItem, wishlist, toggleWishlist } = useCart();
  const isWishlisted = !!wishlist[product.id];
  const stars = "★★★★★".slice(0, product.rating) + "☆☆☆☆☆".slice(0, 5 - product.rating);

  return (
    <article className="group">
      <div className="bracket img-zoom relative h-56 bg-white overflow-hidden">
        <Link to={`/products/${product.slug}`}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </Link>
        <span className="bk-tl" /><span className="bk-tr" /><span className="bk-bl" /><span className="bk-br" />
        <span className="absolute top-3 left-3 bg-[#EFCF25] text-[#121212] text-[11px] font-semibold px-2.5 py-1">
          {product.category}
        </span>
        <WishlistButton active={isWishlisted} onToggle={() => toggleWishlist(product.id)} />
      </div>
      <div className="pt-4">
        <div className="text-[#EFCF25] text-xs" aria-hidden="true">
          {stars} <span className="text-[#6B6B65]">({product.reviews})</span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-semibold mt-1.5 hover:text-[#C9A812] transition-colors">{product.name}</h3>
        </Link>
        <p className="text-[#6B6B65] text-sm mt-0.5">
          Item #{product.sku}
          {product.preorder ? " · Pre-order" : ""}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold">{product.price.toFixed(2)} QAR</span>
          <AddToCartButton onAdd={() => addItem(product, 1)} />
        </div>
      </div>
    </article>
  );
}
