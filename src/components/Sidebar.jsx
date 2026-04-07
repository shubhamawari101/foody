const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'pos', label: 'POS', icon: '🛒' },
  { id: 'orders', label: 'Orders', icon: '📋' },
  { id: 'customers', label: 'Customers', icon: '👥' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="w-20 lg:w-56 bg-gray-900 text-white flex flex-col min-h-screen shrink-0">
      <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-700">
        <span className="text-2xl">🍽️</span>
        <span className="hidden lg:block font-bold text-lg tracking-wide text-orange-400">
          Foody POS
        </span>
      </div>

      <nav className="flex-1 py-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
              activePage === item.id
                ? 'bg-orange-500 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="hidden lg:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold">
            A
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-gray-400">Cashier</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
