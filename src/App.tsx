import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import SingupPage from './pages/SingupPage';
import PrivateRoute from './components/PrivateRoute'

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
      <Route path='/signup' element={<SingupPage />} />
      {/* <Route path='/id' element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
