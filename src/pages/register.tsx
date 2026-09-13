import { useState } from "react";
import { registerUser } from "@/lib/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  
const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      setLoading(true);

      try{

      const response = await registerUser({
        name,
        email,
        address,
        password
      });


      if (response.ok) {
        setMessage("Registration successful!");
        setName("");
        setEmail("");
        setAddress("");
        setPassword("");
      } else if (response.status === 409) {
        setMessage("Email already registered.")
      } else {
        setMessage("Something went wrong. Please try again.");
      }

      } catch (error) {
        setMessage("Unable to connect to the server.")
      } finally {
        setLoading(false);
      }
    };

  return (
    <div>
      <h1>Create an account </h1>

      <form onSubmit={handleSubmit}>
        
      <input 
      type="text"
      placeholder="Name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      />

      <input 
      type="email"
      placeholder="Email"
      value={email}
      onChange={(event) => setEmail(event.target.value)} />

      <input 
      type="text"
      placeholder="Address"
      value={address}
      onChange={(event) => setAddress(event.target.value)} />

      <input 
      type="password"
      placeholder="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)} />
{/* 
      <p>Your name is: {name}</p>
      <p>Your email is: {email}</p> 
      <p>Your address is: {address}</p>
      <p>Your password has been entered.</p> */}

      {message && <p>{message}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Creating account..." : "Created account"}
      </button>

      </form>
    </div>

  );
}