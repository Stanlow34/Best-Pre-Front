export default function LoginGoogle() {
  const handleGoogleLogin = () => {
    // Redirige vers le backend qui lance le flow OAuth
    window.location.href = 'http://localhost:3000/api/auth/google';
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>
      Se connecter avec Google
      </button>
    </div>
  );
}
