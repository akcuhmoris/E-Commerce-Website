export default function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-48 w-full object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <button className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
