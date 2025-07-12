import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UserRequestSlice from '../components/UserRequestSlice'; // Adjust path if needed

// Sample user data
const users = [
  {
    id: 1,
    name: 'Maria Santos',
    avatar: '👩‍🎨',
    location: 'New York, NY',
    offeredSkills: ['Spanish', 'Graphic Design', 'Yoga'],
    wantedSkills: ['JavaScript', 'Piano'],
    rating: 4.9,
    status: 'available',
  },
  {
    id: 2,
    name: 'Liam Chen',
    avatar: '🧑',
    location: 'San Francisco, CA',
    offeredSkills: ['React', 'Node.js'],
    wantedSkills: ['Illustration'],
    rating: 4.6,
    status: 'available',
  },
];

function UserRequestPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = users[0]; // Use Maria for now

  const handleRequestClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmitRequest = (data) => {
    console.log('Request Submitted:', data);
    setIsPopupOpen(false);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="border-b border-gray-300">
        <Navbar />
      </div>

      {/* Profile section */}
      <div className="flex flex-col md:flex-row gap-8 px-6 py-10 max-w-6xl mx-auto">
        {/* Info Card */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
          <p className="text-gray-500 mb-5">{user.location}</p>

          <div className="mb-4">
            <div className="font-medium mb-1">Offered Skills</div>
            <div className="text-gray-700">{user.offeredSkills.join(', ')}</div>
          </div>

          <div className="mb-4">
            <div className="font-medium mb-1">Wanted Skills</div>
            <div className="text-gray-700">{user.wantedSkills.join(', ')}</div>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center items-center">
          <div className="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-6xl">
            {user.avatar}
          </div>
        </div>
      </div>

      {/* Ratings and Button */}
      <div className="border-t bg-white text-center py-8 shadow-inner">
        <h3 className="text-xl font-semibold mb-2">Ratings and Feedback</h3>
        <p className="text-gray-600 mb-4">⭐ {user.rating} / 5.0</p>
        <button
          onClick={handleRequestClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-md transition"
        >
          Request
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <UserRequestSlice
          offeredSkills={user.offeredSkills}
          wantedSkills={user.wantedSkills}
          onClose={handleClosePopup}
          onSubmit={handleSubmitRequest}
        />
      )}
    </div>
  );
}

export default UserRequestPage;
