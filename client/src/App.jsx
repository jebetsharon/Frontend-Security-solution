import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import { AuthProvider } from "./context/AuthContext";
import Brands from "./pages/Brands";

export default function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}
