import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./context/ProctedRoute";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserRequestHistoryPage from "./pages/UserRequestHistoryPage";
import UserRequestPage from "./pages/UserRequestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/requests/:id"
        element={
          // <ProtectedRoute>
            <UserRequestPage />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          // <ProtectedRoute>
            <UserRequestHistoryPage />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
