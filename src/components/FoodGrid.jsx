import FoodCard from './FoodCard';

export default function FoodGrid({ items, onAddToCart }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400">
        <span className="text-5xl mb-4">🍽️</span>
        <p className="text-lg font-medium">No items found</p>
        <p className="text-sm mt-1">Try a different category or search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
