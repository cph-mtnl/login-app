import { useState } from "react";
import SignInContent from "../components/SignInContent";
import SignUpModal from "../components/SignUpModal";

export default function Login({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="container">
      <div className="main--card">
        <SignInContent setUser={setUser} />
        <h3
          className="stolen-color alt-button"
          onClick={() => setShowSignUp(true)}
        >
          Sign up
        </h3>
      </div>
      {showSignUp && (
        <SignUpModal close={() => setShowSignUp(false)} setUser={setUser} />
      )}
    </div>
  );
}
