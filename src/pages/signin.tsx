import { useState } from "react";
import { signinUser } from "@/lib/api";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
         console.log(email, password);
    };

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
            
        </div>
    );
}