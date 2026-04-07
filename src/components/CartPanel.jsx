import { useState } from 'react';

const TAX_RATE = 0.1;

export default function CartPanel({ cart, onUpdateQty, onRemove, onClear }) {
  const [discount, setDiscount] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * TAX_RATE;
  const discountAmount = parseFloat(discount) || 0;
  const total = Math.max(0, subtotal + tax - discountAmount);

  const handlePayNow = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }
    alert(`✅ Order Placed!\n\nTotal: $${total.toFixed(2)}\nThank you for your order!`);
    onClear();
    setDiscount('');
  };

  const handleHoldOrder = () => {
    onClear();
    setDiscount('');
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <aside className="w-full md:w-80 lg:w-96 bg-white shadow-xl flex flex-col shrink-0 border-l border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">Current Order</h2>
        <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {cart.reduce((s, i) => s + i.qty, 0)} items
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-16 text-gray-400">
            <span className="text-5xl mb-3">🛒</span>
            <p className="font-medium text-gray-500">Empty cart</p>
            <p className="text-sm mt-1">Add items to get started</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-indigo-600 font-medium mt-0.5">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => onUpdateQty(item.id, item.qty - 1)}
                  className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-bold flex items-center justify-center transition-colors"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-semibold text-gray-800">
                  {item.qty}
                </span>
                <button
                  onClick={() => onUpdateQty(item.id, item.qty + 1)}
                  className="w-6 h-6 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-sm font-bold flex items-center justify-center transition-colors"
                >
                  +
                </button>
                <button
                  onClick={() => onRemove(item.id)}
                  className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-500 text-xs flex items-center justify-center ml-1 transition-colors"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="px-5 py-4 border-t border-gray-100 space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 shrink-0">Discount ($)</span>
            <input
              type="number"
              min="0"
              placeholder="0.00"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="flex-1 text-right border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
            <span>Total</span>
            <span className="text-indigo-600">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={handleHoldOrder}
            className="py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Hold Order
          </button>
          <button
            onClick={handlePrintReceipt}
            className="py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            🖨 Print
          </button>
        </div>
        <button
          onClick={handlePayNow}
          className="w-full py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-200"
        >
          💳 Pay Now — ${total.toFixed(2)}
        </button>
      </div>
    </aside>
  );
}
