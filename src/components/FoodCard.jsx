export default function FoodCard({ item, onAdd }) {
  return (
    <button
      onClick={() => onAdd(item)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col items-center gap-2 hover:shadow-md hover:border-orange-300 transition-all group text-left w-full"
    >
      <div className="w-full aspect-square bg-orange-50 rounded-xl flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
        {item.emoji}
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-gray-800 text-sm leading-tight truncate">
          {item.name}
        </h3>
        <p className="text-xs text-gray-400 truncate mt-0.5">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-orange-500 text-base">
            ${item.price.toFixed(2)}
          </span>
          <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-colors">
            +
          </span>
        </div>
      </div>
    </button>
  );
}
