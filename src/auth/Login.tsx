import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Identifiants invalides');

      const { access_token } = await res.json();
      localStorage.setItem('jwt', access_token);
      navigate('/dashboard');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Se connecter</button>

      <hr />
      <button onClick={() => window.location.href = 'http://localhost:3000/api/auth/google'}>
        Se connecter avec Google
      </button>

      <p>Pas de compte ? <a href="/register">S'inscrire</a></p>
    </div>
  );
}