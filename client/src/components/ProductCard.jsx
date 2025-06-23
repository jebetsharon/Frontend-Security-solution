import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col">
      <img
        src={product.imageUrl || "https://via.placeholder.com/200"}
        alt={product.name}
        className="rounded-md mb-3 object-cover h-48"
      />
      <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-300 flex-grow">{product.description}</p>
      <p className="mt-2 font-bold text-green-400">KES {product.price}</p>
      <Link
        to={`/products/${product.productId}`}
        className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
