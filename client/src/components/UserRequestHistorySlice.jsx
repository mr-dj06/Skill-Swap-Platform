import React from 'react';

function UserProfileHistorySlice({ user, status = 'pending', onAccept, onReject }) {
  return (
    <div className="flex justify-between items-start p-4 border rounded-lg shadow-sm bg-white w-full max-w-2xl mx-auto mb-4">
      {/* Left: Avatar in Circle */}
      <div className="flex-shrink-0 mr-4">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
          {user.avatar}
        </div>
      </div>

      {/* Middle: Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{user.name}</h3>

        {/* Offered Skills */}
        <div className="mt-2">
          <span className="text-sm font-medium text-gray-600">Offers:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {user.offeredSkills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Wanted Skills */}
        <div className="mt-2">
          <span className="text-sm font-medium text-gray-600">Wants to Learn:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {user.wantedSkills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Status & Actions */}
      <div className="flex flex-col items-end justify-between ml-4">
        <div
          className={`px-3 py-1 rounded-full text-sm font-semibold mb-2
            ${status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>

        {status === 'pending' && (
          <div className="flex gap-2">
            <button
              onClick={onAccept}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Accept
            </button>
            <button
              onClick={onReject}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfileHistorySlice;
