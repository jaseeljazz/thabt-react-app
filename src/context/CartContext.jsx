import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // items: { [productId]: quantity }
  const [items, setItems] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = (product, qty = 1) => {
    setItems((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + qty }));
    setDrawerOpen(true); // auto-open the mini cart whenever something is added
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const removeItem = (productId) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const setQty = (productId, qty) => {
    setItems((prev) => {
      if (qty <= 0) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: qty };
    });
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const next = { ...prev };
      if (next[productId]) delete next[productId];
      else next[productId] = true;
      return next;
    });
  };

  const clearCart = () => setItems({});

  const cartCount = useMemo(() => Object.values(items).reduce((sum, q) => sum + q, 0), [items]);
  const wishlistCount = useMemo(() => Object.keys(wishlist).length, [wishlist]);

  const value = {
    items,
    addItem,
    removeItem,
    setQty,
    clearCart,
    cartCount,
    wishlist,
    toggleWishlist,
    wishlistCount,
    drawerOpen,
    openDrawer,
    closeDrawer,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
