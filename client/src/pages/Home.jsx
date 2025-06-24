import banner from "../assets/home-banner.jpg"; 

const Home = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="CCTV banner"
        className="w-full h-[450px] object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SecureVision</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Reliable and affordable CCTV installation and surveillance solutions for your home and business.
        </p>
        <a
          href="/products"
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
        
        </a>
      </div>
    </div>
  );
};

export default Home;
