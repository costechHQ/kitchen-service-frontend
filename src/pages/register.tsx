import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  
    const handleSubmit = () => {
      console.log({
        name,
        email,
        address,
        password,
      });
    };

  return (
    <div>
      <h1>Create an account </h1>

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

      <p>Your name is: {name}</p>
      <p>Your email is: {email}</p> 
      <p>Your address is: {address}</p>
      <p>Your password has been entered.</p>

      <button type="button" onClick={handleSubmit}>
        Create account
      </button>
    </div>

  );
}