import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from './pages/SignupPage';
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App w-full">
      <Routes>
      <Route path='/' element={
        <PrivateRoute>
          <DashboardPage /> 
        </PrivateRoute>}
      />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/:profileUsername' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
