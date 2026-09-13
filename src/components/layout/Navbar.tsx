import { signoutUser } from "@/lib/api";

export default function Navbar() {
  const handleSignout = async () => {
    const response = await signoutUser();

    if (response.ok) {
      console.log("Signed out successfully");
    }
  };

  return (
    <nav>
      <h1>Kitchen Service</h1>

      <button onClick={handleSignout}>Sign out</button>
    </nav>
  );
}
