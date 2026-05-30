// src/App.jsx
import { LinxoAccounts } from '../components/apiLinxoAccounts';
import { LinxoTransactions } from '../components/apiLinxoTransactions';

export function ApiLinxo() {
  return (
    <div>
      <h1>Mes comptes Linxo</h1>
      <LinxoAccounts />

      <h2>Mes transactions</h2>
      <LinxoTransactions />
    </div>
  );
}
