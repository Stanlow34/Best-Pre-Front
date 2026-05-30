// src/components/
import { useAccounts } from '../hooks/useLinxo';

export function LinxoAccounts() {
  const { accounts, loading, error } = useAccounts();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <ul>
      {accounts.map((account) => (
        <li key={account.id}>
          {account.name} — {account.balance} {account.currency}
        </li>
      ))}
    </ul>
  );
}