import { useState } from "react";
import { signinUser } from "@/lib/api";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Sign in</h1>
        </div>
    );
}