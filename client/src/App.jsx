import "./App.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserRequestHistoryPage from "./pages/UserRequestHistoryPage";
import UserRequestPage from "./pages/UserRequestPage";

function App() {
  return (
    <>
      <UserRequestHistoryPage />
      <UserRequestPage />
      <HomePage />
      <LandingPage />
      <LoginPage />
      <UserProfilePage />
    </>
  );
}

export default App;
