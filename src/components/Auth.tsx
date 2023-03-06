import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuthLoading } from "../Context/userContext";
import { signInUser, signUpUser } from "../services/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useUser();
  const [isLogin, setIsLogin] = useState(true);
  const [loading] = useAuthLoading();

  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) navigate("displayStuff");
  });

  const handleSignUp = async () => {
    const { data } = await signUpUser({ email, password });
    if (data) setUser(data);
    navigate("/displayStuff");
  };

  const handleSignIn = async () => {
    const { data } = await signInUser({ email, password });
    if (data) setUser(data);
    navigate("/displayStuff");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      handleSignIn();
    } else {
      handleSignUp();
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
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
      <button
        type="button"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Create an Account" : "Already Have an Account"}
      </button>
    </div>
  );
}
