export function Input(props) {
  return (
    <input
      {...props}
      className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
    />
  );
}