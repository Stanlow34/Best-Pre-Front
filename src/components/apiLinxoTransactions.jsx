// src/components/Transactions.jsx
import { useTransactions } from '../hooks/useLinxo';

export function LinxoTransactions({ accountId }) {
  const { transactions, loading, error } = useTransactions(accountId);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id}>
          {tx.date} — {tx.description} : {tx.amount} {tx.currency}
        </li>
      ))}
    </ul>
  );
}