import { NavLink } from "react-router-dom";

const NavBar = () => {
  const baseStyle = "text-sm md:text-base px-4 py-2 rounded hover:bg-blue-600 transition";
  const activeStyle = "bg-blue-700";

  return (
    <nav className="bg-gray-800 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">SecureVision</h1>
        <div className="flex space-x-4">
          <NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>Products</NavLink>
          <NavLink to="/bookings" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>Bookings</NavLink>
          <NavLink to="/login" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>Login</NavLink>
          <NavLink to="/register" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>Register</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
