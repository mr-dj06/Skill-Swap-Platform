function UserProfileSlice({ user, onClick }) {
  const {
    name = "Anonymous",
    avatar = "👤",
    location = "Unknown",
    skillsOffered = [],
    skillsWanted = [],
    rating = 0,
    status = "available",
  } = user || {};

  return (
    <div onClick={onClick} className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-3xl">{avatar}</div>
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {name}
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                status === "available"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {status}
            </span>
          </h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Skills Offered */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-700">Offers:</p>
        <ul className="flex flex-wrap gap-2 mt-1">
          {skillsOffered.length ? (
            skillsOffered.map((skill, idx) => (
              <li key={idx} className="bg-blue-100 px-2 py-1 rounded text-sm">
                {skill}
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">No offered skills</li>
          )}
        </ul>
      </div>

      {/* Skills Wanted */}
      <div className="mt-2">
        <p className="text-sm font-semibold text-gray-700">Wants:</p>
        <ul className="flex flex-wrap gap-2 mt-1">
          {skillsWanted.length ? (
            skillsWanted.map((skill, idx) => (
              <li key={idx} className="bg-green-100 px-2 py-1 rounded text-sm">
                {skill}
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">No wanted skills</li>
          )}
        </ul>
      </div>

      {/* Rating */}
      <div className="mt-3 text-yellow-500 text-sm">
        {"★".repeat(Math.round(rating))}
        {"☆".repeat(5 - Math.round(rating))}
        <span className="ml-2 text-gray-500">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
}

export default UserProfileSlice;
