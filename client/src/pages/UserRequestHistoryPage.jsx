import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeaderSlice from "../components/HeaderSlice";
import Pagination from "../components/Pagination";
import UserProfileHistorySlice from "../components/UserRequestHistorySlice";

const requestHistory = [
  {
    id: 1,
    name: 'Maria Santos',
    avatar: '👩‍🎨',
    location: 'New York, NY',
    offeredSkills: ['Spanish', 'Graphic Design'],
    wantedSkills: ['JavaScript'],
    rating: 4.9,
    status: 'pending',
  },
  {
    id: 2,
    name: 'Liam Chen',
    avatar: '🧑',
    location: 'San Francisco, CA',
    offeredSkills: ['React'],
    wantedSkills: ['Illustration'],
    rating: 4.6,
    status: 'answered',
  },

];

const REQUESTS_PER_PAGE = 1;

function UserRequestHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(requestHistory.length / REQUESTS_PER_PAGE);
  const startIndex = (currentPage - 1) * REQUESTS_PER_PAGE;
  const currentRequests = requestHistory.slice(startIndex, startIndex + REQUESTS_PER_PAGE);

  const handleAccept = (id) => {
    console.log(`Accepted request from user ${id}`);
    
  };

  const handleReject = (id) => {
    console.log(`Rejected request from user ${id}`);
    
  };

  return (
    <div className="relative min-h-screen bg-gray-50 pb-10">
      <Navbar />
      <HeaderSlice />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Request History</h1>

        {/* History Slices */}
        {currentRequests.map((user) => (
          <UserProfileHistorySlice
            key={user.id}
            user={user}
            status={user.status}
            onAccept={() => handleAccept(user.id)}
            onReject={() => handleReject(user.id)}
          />
        ))}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default UserRequestHistoryPage;
