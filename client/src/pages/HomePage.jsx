import { useEffect, useState } from "react";
import API from "../axios";
import Navbar from "../components/Navbar";
import UserProfileSlice from "../components/UserProfileSlice";
import Pagination from "../components/Pagination";
import HeaderSlice from "../components/HeaderSlice";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchText] = useState("");

  const fetchUsers = async (skill = "") => {
    setLoading(true);
    try {
      const res = skill.trim()
        ? await API.get(`/user/search?skill=${encodeURIComponent(skill)}`)
        : await API.get(`/user`);
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Please login first or check your backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // initial load all users
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchUsers(searchText);
      setCurrentPage(1);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const USERS_PER_PAGE = 3;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;
  if (!users.length) return <p className="p-6 text-center">No users found.</p>;

  return (
    <div className="relative min-h-screen bg-gray-50 pb-10">
      <Navbar />
      <HeaderSlice
        searchValue={searchText}
        onSearchChange={(val) => setSearchText(val)}
        onKeyDown={handleKeyDown}
      />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Let's begin</h1>

        {currentUsers.map((user) => (
          <UserProfileSlice
            key={user._id}
            user={user}
            onClick={() => navigate(`/requests/${user._id}`)}
          />
        ))}

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
