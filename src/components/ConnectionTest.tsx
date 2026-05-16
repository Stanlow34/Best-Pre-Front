// src/components/ConnectionTest.tsx
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

type Status = 'idle' | 'loading' | 'success' | 'error';

interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

export default function ConnectionTest() {
  const [status, setStatus] = useState<Status>('idle');
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const testConnection = async () => {
    setStatus('loading');
    setData(null);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/health`);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} — ${res.statusText}`);
      }

      const json: HealthResponse = await res.json();
      setData(json);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      setStatus('error');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', padding: '2rem', maxWidth: '100%' }}>
      <h2>🔌 Test de connexion Front → Back</h2>
      <p style={{ color: '#666' }}>URL cible : <code>{API_URL}/health</code></p>

      <button
        onClick={testConnection}
        disabled={status === 'loading'}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          justifyItems: 'center',
          padding: '0.6rem 1.4rem',
          background: '#1a1a1a',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          fontSize: '1rem',
        }}
      >
        {status === 'loading' ? '⏳ Test en cours…' : '🚀 Tester la connexion'}
      </button>

      {status === 'success' && data && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#e8f5e9', borderRadius: 8 }}>
          <p>✅ <strong>Connexion réussie</strong></p>
          <p>Message : {data.message}</p>
          <p>Timestamp : {new Date(data.timestamp).toLocaleString('fr-FR')}</p>
        </div>
      )}

      {status === 'error' && error && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#ffebee', borderRadius: 8 }}>
          <p>❌ <strong>Connexion échouée</strong></p>
          <p>Erreur : {error}</p>
          <p style={{ fontSize: '0.85rem', color: '#888' }}>
            Vérifiez que le serveur NestJS tourne sur <code>{API_URL}</code> et que le CORS est activé.
          </p>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Usage dans App.tsx :
//
// import ConnectionTest from './components/ConnectionTest';
//
// function App() {
//   return <ConnectionTest />;
// }
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// Optionnel — .env à la racine du projet Vite :
//
// VITE_API_URL=http://localhost:3000
// ─────────────────────────────────────────────