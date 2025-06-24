import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then(setBookings)
      .catch(() => setBookings([]));
  }, [user]);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-400">No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li
              key={b.bookingId}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{b.productName}</p>
                <p>Date: {b.date}</p>
                <p>Location: {b.location}</p>
                <p>Status: {b.status}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookings;
