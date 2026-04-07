import { useState, useCallback, useMemo } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import FoodGrid from './components/FoodGrid';
import CartPanel from './components/CartPanel';
import foodItems from './data/foodItems';

function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const filteredItems = useMemo(() => {
    return foodItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const handleAddToCart = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const handleUpdateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((c) => c.id !== id));
    } else {
      setCart((prev) =>
        prev.map((c) => (c.id === id ? { ...c, qty } : c))
      );
    }
  }, []);

  const handleRemove = useCallback((id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const handleClear = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <main className="flex-1 flex flex-col overflow-hidden">
          <TopBar
            search={search}
            onSearch={setSearch}
            activeCategory={activeCategory}
            onCategory={setActiveCategory}
          />
          <div className="flex-1 overflow-y-auto p-5">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-800">
                {activeCategory === 'All' ? 'All Items' : activeCategory}
              </h1>
              <span className="text-sm text-gray-500">
                {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
              </span>
            </div>
            <FoodGrid items={filteredItems} onAddToCart={handleAddToCart} />
          </div>
        </main>

        <CartPanel
          cart={cart}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;

