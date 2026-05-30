import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', firstname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const { access_token } = await res.json();
      localStorage.setItem('jwt', access_token);
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <input placeholder="Nom" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Prénom" onChange={e => setForm({ ...form, firstname: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Mot de passe" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleSubmit}>S'inscrire</button>
    </div>
  );
}