export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="max-w-lg space-y-4">
        {[
          { label: 'Restaurant Name', value: 'Foody POS', type: 'text' },
          { label: 'Tax Rate (%)', value: '8', type: 'number' },
          { label: 'Currency', value: 'USD ($)', type: 'text' },
          { label: 'Receipt Footer', value: 'Thank you for dining with us!', type: 'text' },
        ].map((field) => (
          <div key={field.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">{field.label}</label>
            <input
              type={field.type}
              defaultValue={field.value}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>
        ))}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
          Save Settings
        </button>
      </div>
    </div>
  );
}
