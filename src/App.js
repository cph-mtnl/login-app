import { useState } from "react";
import "./styles/App.css";
import SignInContent from "./components/SignInContent";
import SignUpModal from "./components/SignUpModal";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="container">
      <div className="main--card">
        <SignInContent />
        <h3
          className="stolen-color alt-button"
          onClick={() => setShowSignUp(true)}
        >
          Sign up
        </h3>
      </div>
      {showSignUp && <SignUpModal close={() => setShowSignUp(false)} />}
    </div>
  );
}

export default App;
