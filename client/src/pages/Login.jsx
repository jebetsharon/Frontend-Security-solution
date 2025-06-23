import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with real auth API call
    if (formData.email === "user@example.com" && formData.password === "password") {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Email
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
          />
        </label>

        <label className="block mb-6">
          Password
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
          />
        </label>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
