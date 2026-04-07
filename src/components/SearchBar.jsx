export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 max-w-md">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search food items…"
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    </div>
  );
}
