import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/userContext";
import { signUpUser } from "../services/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setUser] = useUser();

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await signUpUser({ email, password });
    if (data) setUser(data);
    navigate("/displayStuff");
  };

  return (
    <div>
      <form className="flex flex-column" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
