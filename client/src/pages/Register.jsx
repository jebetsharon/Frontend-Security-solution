import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Replace with real registration API call
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Username
          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
          />
        </label>

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

        <label className="block mb-4">
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

        <label className="block mb-6">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
          />
        </label>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
