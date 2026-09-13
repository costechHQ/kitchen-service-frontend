import { useRouter } from "next/router";
import { useState } from "react";
import { signinUser } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";
import { useAuth } from "@/hooks/useAuth";


export default function Signin() {
    const { loading } = useAuth();  

    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await signinUser({
            email,
            password,
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          setMessage("Sign in successful");
          await router.push("/");

        } else if (response.status === 401) {
          setMessage("Invalid email or password");
        } else {
          setMessage("Something went wrong");
        }
        
    };

    if (loading) {
      return <p>Checking authentication...</p>;
    }

    return (
        <div>
            <h1>Sign in</h1>

            <form onSubmit={handleSubmit}>

            <input 
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            />

            <input 
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            />

            <button type="submit">
                Sign in
            </button>

            </form>

            {message && <p>{message}</p>}
            
        </div>
    );
}