const orders = [
  { id: '#1042', customer: 'John Doe', date: 'Today, 14:23', items: 3, total: '$34.50', status: 'Completed' },
  { id: '#1041', customer: 'Jane Smith', date: 'Today, 13:10', items: 2, total: '$22.99', status: 'Completed' },
  { id: '#1040', customer: 'Bob Johnson', date: 'Today, 12:05', items: 5, total: '$67.80', status: 'On Hold' },
  { id: '#1039', customer: 'Alice Brown', date: 'Today, 11:30', items: 1, total: '$12.49', status: 'Completed' },
  { id: '#1038', customer: 'Charlie Davis', date: 'Yesterday', items: 4, total: '$55.20', status: 'Completed' },
  { id: '#1037', customer: 'Eva Martinez', date: 'Yesterday', items: 2, total: '$28.00', status: 'Completed' },
];

export default function OrdersPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-6 text-xs font-semibold text-gray-400 uppercase tracking-wide px-6 py-3 bg-gray-50 border-b border-gray-100">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Date</span>
          <span>Items</span>
          <span>Total</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-gray-50">
          {orders.map((order) => (
            <div key={order.id} className="grid grid-cols-6 items-center px-6 py-4 text-sm">
              <span className="font-mono font-semibold text-gray-600">{order.id}</span>
              <span className="text-gray-800">{order.customer}</span>
              <span className="text-gray-400">{order.date}</span>
              <span className="text-gray-600">{order.items}</span>
              <span className="font-semibold text-gray-800">{order.total}</span>
              <span
                className={`inline-flex w-fit text-xs font-medium px-2.5 py-1 rounded-full ${
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
