import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(setProduct)
      .catch(() =>
        setProduct({
          productId: id,
          name: "Sample Dome Camera",
          description: "High quality 1080p indoor dome camera.",
          price: 6000,
          imageUrl: "https://via.placeholder.com/500",
        })
      );
  }, [id]);

  if (!product) return <p className="p-8">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={product.imageUrl || "https://via.placeholder.com/500"}
        alt={product.name}
        className="w-full rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
      <p className="mb-4 text-gray-300">{product.description}</p>
      <p className="text-2xl font-semibold text-green-400 mb-6">
        Price: KES {product.price}
      </p>

      <BookingForm productId={product.productId} />
    </div>
  );
};

const BookingForm = ({ productId }) => {
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with real backend POST call
    setMessage("Booking submitted! (Demo mode)");

    setFormData({ date: "", location: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg max-w-lg">
      <h2 className="text-2xl mb-4 font-semibold text-blue-400">Book Installation</h2>

      <label className="block mb-2">
        Date
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
        />
      </label>

      <label className="block mb-2">
        Location
        <input
          type="text"
          name="location"
          required
          placeholder="Installation address"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
        />
      </label>

      <label className="block mb-4">
        Additional Notes
        <textarea
          name="notes"
          rows="3"
          placeholder="Any special instructions"
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 w-full p-2 rounded bg-gray-700 text-white resize-none"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
      >
        Submit Booking
      </button>

      {message && <p className="mt-4 text-green-400">{message}</p>}
    </form>
  );
};

export default ProductDetail;
