//-------------------------------- hooks ---------------------------
// src/hooks/useLinxo.js
import { useState, useEffect } from 'react';
import { linxoService } from '../containers/bank/linxoService';

export function useAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    linxoService.getAccounts()
      .then(setAccounts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { accounts, loading, error };
}

export function useTransactions(accountId) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = accountId
      ? linxoService.getTransactionsByAccount(accountId)
      : linxoService.getTransactions();

    fetch
      .then(setTransactions)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [accountId]);

  return { transactions, loading, error };
}