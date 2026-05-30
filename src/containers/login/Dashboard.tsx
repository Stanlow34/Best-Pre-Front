// src/pages/Dashboard.tsx
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };

  return (
    <div>
      <img src={user.picture} alt="avatar" />
      <h1>Bonjour {user.name}</h1>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}