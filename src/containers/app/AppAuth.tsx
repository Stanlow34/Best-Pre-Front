import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginGoogle from '../../auth/Login.google';
import Login from '../../auth/login';
import AuthCallback from '../../auth/AuthCallback';
import Dashboard from '../login/Dashboard';
import Register from '../../auth/Register';


export function AppAuth() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginG" element={<LoginGoogle />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/parametres" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}