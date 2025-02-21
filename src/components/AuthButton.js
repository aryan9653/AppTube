// src/components/AuthButton.js
import { signInWithGoogle, logout } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

const AuthButton = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return user ? (
    <div className="flex items-center gap-4">
      <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
      <p>{user.displayName}</p>
      <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  ) : (
    <button onClick={signInWithGoogle} className="px-4 py-2 bg-blue-500 text-white rounded">
      Sign in with Google
    </button>
  );
};

export default AuthButton;
