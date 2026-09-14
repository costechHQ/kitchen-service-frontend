import { signoutUser } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store"
import { useRouter } from "next/router"; 

export default function Navbar() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  
  
  const handleSignout = async () => {
    const response = await signoutUser();

    if (response.ok) {
      clearUser();
      await router.push("/signin");      
    }
  };

  return (
    <nav>
      <h1>Kitchen Service</h1>

      {user ? (
        <button onClick={handleSignout}>Sign out</button>
      ) : (
        <button onClick={() => router.push("/signin")}>Sign in</button>
      )}
    </nav>
  );
}
