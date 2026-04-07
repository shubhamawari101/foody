import { useState, useCallback } from 'react';

export function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addItem = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setDiscount(0);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + tax - discountAmount;

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    discount,
    setDiscount,
    subtotal,
    tax,
    discountAmount,
    total,
  };
}
