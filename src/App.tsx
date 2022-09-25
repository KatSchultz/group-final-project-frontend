import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import PaletteView from "./components/PaletteView";
import SinglePalettePage from "./components/SinglePalettePage";

function App() {
  return (
    <div className="App w-full">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/palettes" element={<PaletteView />} />
        <Route path="/palettes/:id" element={<SinglePalettePage />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
