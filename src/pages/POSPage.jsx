import { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import FoodCard from '../components/FoodCard';
import CartPanel from '../components/CartPanel';
import { categories, menuItems } from '../data/menuItems';
import { useCart } from '../hooks/useCart';

export default function POSPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const cart = useCart();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const handlePay = () => {
    if (cart.cartItems.length === 0) return;
    alert(`✅ Payment of $${cart.total.toFixed(2)} processed successfully!`);
    cart.clearCart();
  };

  const handleHold = () => {
    if (cart.cartItems.length === 0) return;
    alert('⏸ Order placed on hold.');
  };

  const handlePrint = () => {
    if (cart.cartItems.length === 0) return;
    const lines = cart.cartItems
      .map((i) => `${i.name} x${i.quantity}  $${(i.price * i.quantity).toFixed(2)}`)
      .join('\n');
    alert(
      `🖨️ Receipt\n${'─'.repeat(30)}\n${lines}\n${'─'.repeat(30)}\nSubtotal: $${cart.subtotal.toFixed(2)}\nTax:      $${cart.tax.toFixed(2)}\nDiscount: -$${cart.discountAmount.toFixed(2)}\nTotal:    $${cart.total.toFixed(2)}`
    );
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 shrink-0">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800">Point of Sale</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <SearchBar value={search} onChange={setSearch} />
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm">
            🔔
          </div>
        </header>

        {/* Category Filter */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 shrink-0">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Food Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-300 gap-3">
              <span className="text-6xl">🍽️</span>
              <p className="text-sm font-medium text-gray-400">No items found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} item={item} onAdd={cart.addItem} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Cart Panel */}
      <CartPanel
        cartItems={cart.cartItems}
        onRemove={cart.removeItem}
        onQuantityChange={cart.updateQuantity}
        onClear={cart.clearCart}
        discount={cart.discount}
        onDiscountChange={cart.setDiscount}
        subtotal={cart.subtotal}
        tax={cart.tax}
        discountAmount={cart.discountAmount}
        total={cart.total}
        onHold={handleHold}
        onPay={handlePay}
        onPrint={handlePrint}
      />
    </div>
  );
}
