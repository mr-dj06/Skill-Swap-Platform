import React from 'react';

function HeaderSlice() {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200 shadow-sm px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Left: Sort / Filter */}
      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700">
          Sort by:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Middle: Empty */}
      <div className="flex-1 hidden md:block"></div>

      {/* Right: Search Bar */}
      <div className="w-full md:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-64 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default HeaderSlice;
