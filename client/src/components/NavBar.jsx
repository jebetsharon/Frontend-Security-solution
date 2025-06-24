import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [showBrands, setShowBrands] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const linkStyle = "text-sm md:text-base px-4 py-2 rounded hover:bg-blue-600 transition";
  const activeStyle = "bg-blue-700";

  return (
    <nav className="bg-gray-800 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold text-blue-400">SecureVision</h1>
        <div className="flex space-x-4 relative">
          <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>Home</NavLink>

          {/* Brands Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowBrands(true)}
            onMouseLeave={() => setShowBrands(false)}
          >
            <button className={`${linkStyle} ${showBrands ? activeStyle : ""}`}>
              Brands
            </button>
            {showBrands && (
              <div className="absolute bg-gray-700 mt-2 py-2 rounded shadow-md w-48 z-50">
                {["Hikvision", "Dahua", "Samsung", "CP Plus", "Vivotek"].map((brand) => (
                  <a
                    key={brand}
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-600"
                  >
                    {brand}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className={`${linkStyle} ${showServices ? activeStyle : ""}`}>
              Services
            </button>
            {showServices && (
              <div className="absolute bg-gray-700 mt-2 py-2 rounded shadow-md w-52 z-50">
                {[
                  "CCTV Installation",
                  "Remote Monitoring",
                  "Maintenance",
                  "Alarm System Setup",
                  "Access Control"
                ].map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-600"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/bookings" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>Bookings</NavLink>
          <NavLink to="/login" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>Login</NavLink>
          <NavLink to="/register" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>Register</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
