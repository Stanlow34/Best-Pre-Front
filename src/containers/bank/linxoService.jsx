// src/containers/bank/linxo.service.jsx
const BASE_URL = import.meta.env.VITE_API_URL;

async function fetchApi(endpoint, options) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }

  return response.json();
}

export const linxoService = {
  getAccounts: () => fetchApi('/linxo/accounts'),
  getAccount: (id) => fetchApi(`/linxo/accounts/${id}`),
  getTransactions: () => fetchApi('/linxo/transactions'),
  getTransactionsByAccount: (id) => fetchApi(`/linxo/accounts/${id}/transactions`),
  getConnections: () => fetchApi('/linxo/connections'),
  syncConnection: (id) => fetchApi(`/linxo/connections/${id}/sync`, { method: 'POST' }),
};
