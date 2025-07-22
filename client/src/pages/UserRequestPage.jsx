import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../axios";
import Navbar from "../components/Navbar";
import UserRequestSlice from "../components/UserRequestSlice";

function UserRequestPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get(`/user/${id}`); // backend: get user by ID
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [id]);

  const handleRequestClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleSubmitRequest = (data) => {
    console.log("Request Submitted:", data);
    setIsPopupOpen(false);
  };

  if (!user) return <div className="p-6 text-center">Loading user...</div>;

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="border-b border-gray-300">
        <Navbar />
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-6 py-10 max-w-6xl mx-auto">
        <div className="flex-1 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
          <p className="text-gray-500 mb-5">{user.location}</p>

          <div className="mb-4">
            <div className="font-medium mb-1">Offered Skills</div>
            <div className="text-gray-700">
              {(user.skillsOffered || []).join(", ")}
            </div>
          </div>

          <div className="mb-4">
            <div className="font-medium mb-1">Wanted Skills</div>
            <div className="text-gray-700">
              {(user.skillsWanted || []).join(", ")}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-6xl">
            {user.avatar || "👤"}
          </div>
        </div>
      </div>

      <div className="border-t bg-white text-center py-8 shadow-inner">
        <h3 className="text-xl font-semibold mb-2">Ratings and Feedback</h3>
        <p className="text-gray-600 mb-4">⭐ {user.rating || 0} / 5.0</p>
        <button
          onClick={handleRequestClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-md transition"
        >
          Request
        </button>
      </div>

      {isPopupOpen && (
        <UserRequestSlice
          offeredSkills={user.skillsOffered || []}
          wantedSkills={user.skillsWanted || []}
          onClose={handleClosePopup}
          onSubmit={handleSubmitRequest}
        />
      )}
    </div>
  );
}

export default UserRequestPage;
