import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserProfileSlice from "../components/UserProfileSlice";
import Pagination from "../components/Pagination";

// Sample users (mock data)
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
  // Add more users if needed to test pagination
];

const USERS_PER_PAGE = 1;

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  return (
    <div className="relative min-h-screen bg-gray-50 pb-10">
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Skill Swap Users</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by skill or name..."
            className="w-full px-4 py-2 border rounded-md shadow-sm"
          />
        </div>

        {/* User Slices */}
        {currentUsers.map((user) => (
          <UserProfileSlice key={user.id} user={user} />
        ))}

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default HomePage;
