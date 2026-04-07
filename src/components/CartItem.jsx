export default function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-xl shrink-0">
        {item.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
        <p className="text-xs text-orange-500 font-semibold">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => onQuantityChange(item.id, -1)}
          className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-bold transition-colors"
        >
          −
        </button>
        <span className="w-6 text-center text-sm font-semibold text-gray-800">
          {item.quantity}
        </span>
        <button
          onClick={() => onQuantityChange(item.id, 1)}
          className="w-6 h-6 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white text-sm font-bold transition-colors"
        >
          +
        </button>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-bold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-xs text-red-400 hover:text-red-600 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
