import React, { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const filtered = useMemo(() => {
    if (!activeCategory) return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const setCategory = (category) => {
    if (!category) {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="pt-32 pb-16 sm:pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      <div className="mb-8">
        <p className="text-sm text-[#6B6B65]">
          <Link to="/" className="hover:text-[#C9A812] transition-colors">
            Home
          </Link>{" "}
          / <span className="text-[#121212]">Products</span>
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mt-2">
          {activeCategory ? activeCategory : "All products"}
        </h1>
        <p className="text-[#6B6B65] mt-2 max-w-md">
          {filtered.length} {filtered.length === 1 ? "product" : "products"} found.
        </p>
      </div>

      {/* Category filter row */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-[#E5E2D8] pb-6">
        <button
          type="button"
          onClick={() => setCategory("")}
          className={`text-sm px-4 py-2 border transition-colors ${
            !activeCategory ? "bg-[#121212] text-white border-[#121212]" : "border-[#E5E2D8] text-[#121212]/70 hover:border-[#121212]"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`text-sm px-4 py-2 border transition-colors ${
              activeCategory === c ? "bg-[#121212] text-white border-[#121212]" : "border-[#E5E2D8] text-[#121212]/70 hover:border-[#121212]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#6B6B65]">No products in this category yet.</p>
          <button
            type="button"
            onClick={() => setCategory("")}
            className="mt-4 text-sm font-semibold text-[#C9A812] hover:underline"
          >
            View all products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
