import { useState } from 'react';
import Sidebar from './components/Sidebar';
import POSPage from './pages/POSPage';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import CustomersPage from './pages/CustomersPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [activePage, setActivePage] = useState('pos');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'pos':
        return <POSPage />;
      case 'orders':
        return <OrdersPage />;
      case 'customers':
        return <CustomersPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <POSPage />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="flex flex-1 overflow-hidden">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
