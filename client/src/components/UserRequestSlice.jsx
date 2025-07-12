import React, { useState } from "react";

function UserRequestSlice({ offeredSkills, wantedSkills, onClose, onSubmit }) {
  const [offeredSkill, setOfferedSkill] = useState("");
  const [wantedSkill, setWantedSkill] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ offeredSkill, wantedSkill, message });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Propose a Skill Swap</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Offered Skill</label>
            <select
              className="w-full p-2 border rounded"
              value={offeredSkill}
              onChange={(e) => setOfferedSkill(e.target.value)}
              required
            >
              <option value="">Select a skill</option>
              {offeredSkills.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Their Wanted Skill</label>
            <select
              className="w-full p-2 border rounded"
              value={wantedSkill}
              onChange={(e) => setWantedSkill(e.target.value)}
              required
            >
              <option value="">Select a skill</option>
              {wantedSkills.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full p-2 border rounded resize-none"
              rows={4}
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRequestSlice;
