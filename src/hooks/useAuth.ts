export function useAuth() {
  const token = localStorage.getItem('jwt');

  if (!token) return { user: null, isAuthenticated: false };

  // Décoder le JWT (sans vérification, juste pour affichage)
  const payload = JSON.parse(atob(token.split('.')[1]));

  return { user: payload, isAuthenticated: true };
}
