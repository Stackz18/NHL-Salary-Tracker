export function Progress({ value }) {
  return (
    <div className="w-full bg-gray-300 rounded h-3 overflow-hidden">
      <div
        className="bg-blue-600 h-3"
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  );
}
