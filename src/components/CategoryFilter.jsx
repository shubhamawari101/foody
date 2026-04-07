export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat.id
              ? 'bg-orange-500 text-white shadow'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-400 hover:text-orange-500'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
