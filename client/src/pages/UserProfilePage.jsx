import React from 'react';
import UserProfilePhoto from '../components/UserProfilePhoto';

function UserProfilePage() {
  const user = {
    name: 'Maria Santos',
    avatar: '👩‍🎨',
    location: 'New York, NY',
    offeredSkills: ['Spanish', 'Graphic Design', 'Yoga'],
    wantedSkills: ['JavaScript', 'Piano'],
    rating: 4.9,
    status: 'available',
  };

  const getStatusColor = (status) => {
    return status === 'available' ? 'bg-green-500' : 'bg-gray-400';
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">{user.avatar}</div>
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.location}</p>

        {/* Status & Rating */}
        <div className="flex justify-center items-center gap-4 mt-3">
          <span className="flex items-center text-sm">
            <span className={`h-3 w-3 rounded-full ${getStatusColor(user.status)} mr-2`}></span>
            {user.status}
          </span>
          <span className="text-sm text-yellow-500">
            {'★'.repeat(Math.floor(user.rating))}{' '}
            <span className="text-gray-600">({user.rating})</span>
          </span>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">Skills Offered</h3>
          <ul className="space-y-2">
            {user.offeredSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">Skills Wanted</h3>
          <ul className="space-y-2">
            {user.wantedSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Swap Button */}
      <div className="text-center mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md">
          Request Skill Swap
        </button>
      </div>
    </div>
  );
}

export default UserProfilePage;
