export default function DashboardPage() {
  const stats = [
    { label: 'Total Sales', value: '$4,289', icon: '💰', change: '+12%' },
    { label: 'Orders Today', value: '86', icon: '📋', change: '+5%' },
    { label: 'Customers', value: '342', icon: '👥', change: '+8%' },
    { label: 'Avg. Order', value: '$49.87', icon: '📊', change: '+3%' },
  ];

  const recentOrders = [
    { id: '#1042', customer: 'John Doe', items: 3, total: '$34.50', status: 'Completed' },
    { id: '#1041', customer: 'Jane Smith', items: 2, total: '$22.99', status: 'Completed' },
    { id: '#1040', customer: 'Bob Johnson', items: 5, total: '$67.80', status: 'On Hold' },
    { id: '#1039', customer: 'Alice Brown', items: 1, total: '$12.49', status: 'Completed' },
    { id: '#1038', customer: 'Charlie Davis', items: 4, total: '$55.20', status: 'Completed' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800">Recent Orders</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center gap-4 px-6 py-4">
              <span className="font-mono text-sm font-semibold text-gray-500">{order.id}</span>
              <span className="flex-1 text-sm text-gray-800">{order.customer}</span>
              <span className="text-sm text-gray-400">{order.items} items</span>
              <span className="text-sm font-semibold text-gray-800">{order.total}</span>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  order.status === 'Completed'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-yellow-50 text-yellow-600'
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
