const customers = [
  { name: 'John Doe', email: 'john@example.com', orders: 12, spent: '$380.50', joined: 'Jan 2024' },
  { name: 'Jane Smith', email: 'jane@example.com', orders: 8, spent: '$245.00', joined: 'Feb 2024' },
  { name: 'Bob Johnson', email: 'bob@example.com', orders: 5, spent: '$189.90', joined: 'Mar 2024' },
  { name: 'Alice Brown', email: 'alice@example.com', orders: 20, spent: '$620.75', joined: 'Dec 2023' },
  { name: 'Charlie Davis', email: 'charlie@example.com', orders: 3, spent: '$98.40', joined: 'Apr 2024' },
];

export default function CustomersPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Customers</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-5 text-xs font-semibold text-gray-400 uppercase tracking-wide px-6 py-3 bg-gray-50 border-b border-gray-100">
          <span className="col-span-2">Customer</span>
          <span>Orders</span>
          <span>Total Spent</span>
          <span>Joined</span>
        </div>
        <div className="divide-y divide-gray-50">
          {customers.map((c) => (
            <div key={c.email} className="grid grid-cols-5 items-center px-6 py-4 text-sm">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm">
                  {c.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.email}</p>
                </div>
              </div>
              <span className="text-gray-600">{c.orders}</span>
              <span className="font-semibold text-gray-800">{c.spent}</span>
              <span className="text-gray-400">{c.joined}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
