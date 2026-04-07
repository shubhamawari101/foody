export default function FoodCard({ item, onAddToCart }) {
  return (
    <div
      onClick={() => onAddToCart(item)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(item);
          }}
          className="absolute top-2 right-2 w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold shadow"
          aria-label={`Add ${item.name} to cart`}
        >
          +
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-indigo-600 font-bold text-sm">${item.price.toFixed(2)}</span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
}
