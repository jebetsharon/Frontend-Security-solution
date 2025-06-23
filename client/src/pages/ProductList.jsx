import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => {
        setProducts([
          {
            productId: "1",
            name: "Dome Camera",
            description: "Indoor 1080p dome camera",
            price: 6000,
            imageUrl: "https://via.placeholder.com/300?text=Dome+Camera",
          },
          {
            productId: "2",
            name: "Bullet Camera",
            description: "Outdoor weatherproof camera",
            price: 8500,
            imageUrl: "https://via.placeholder.com/300?text=Bullet+Camera",
          },
        ]);
      });
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Available CCTV Products</h2>
      {products.length === 0 ? (
        <p className="text-gray-400">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
