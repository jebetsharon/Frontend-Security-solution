const Brands = () => {
  const brands = [
    { name: "Hikvision", image: "https://via.placeholder.com/200?text=Hikvision" },
    { name: "Dahua", image: "https://via.placeholder.com/200?text=Dahua" },
    { name: "Samsung", image: "https://via.placeholder.com/200?text=Samsung" },
    { name: "CP Plus", image: "https://via.placeholder.com/200?text=CP+Plus" },
    { name: "Vivotek", image: "https://via.placeholder.com/200?text=Vivotek" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">CCTV Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div key={brand.name} className="bg-gray-800 rounded-lg shadow-md p-4 text-center">
            <img src={brand.image} alt={brand.name} className="mx-auto h-40 object-cover rounded mb-3" />
            <h3 className="text-xl font-semibold text-blue-400">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;