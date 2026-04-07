import CartItem from './CartItem';

export default function CartPanel({
  cartItems,
  onRemove,
  onQuantityChange,
  onClear,
  discount,
  onDiscountChange,
  subtotal,
  tax,
  discountAmount,
  total,
  onHold,
  onPay,
  onPrint,
}) {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col h-screen sticky top-0 shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="font-bold text-gray-800 text-lg">Current Order</h2>
        {cartItems.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-red-400 hover:text-red-600 transition-colors font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-5">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-300 gap-3">
            <span className="text-6xl">🛒</span>
            <p className="text-sm font-medium">Your cart is empty</p>
            <p className="text-xs">Click items to add them</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onQuantityChange={onQuantityChange}
            />
          ))
        )}
      </div>

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <div className="border-t border-gray-100 px-5 py-4 space-y-3">
          {/* Discount Input */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-500">Discount (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={discount}
              onChange={(e) =>
                onDiscountChange(Math.min(100, Math.max(0, Number(e.target.value))))
              }
              className="w-20 text-right border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-500">
                <span>Discount ({discount}%)</span>
                <span>−${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-gray-800 text-base pt-2 border-t border-gray-100">
              <span>Total</span>
              <span className="text-orange-500">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            onClick={onHold}
            className="w-full py-2.5 rounded-xl border-2 border-gray-300 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            ⏸ Hold Order
          </button>
          <div className="flex gap-2">
            <button
              onClick={onPrint}
              className="flex-1 py-2.5 rounded-xl border-2 border-orange-400 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition-colors"
            >
              🖨️ Print
            </button>
            <button
              onClick={onPay}
              className="flex-1 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow"
            >
              💳 Pay Now
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
