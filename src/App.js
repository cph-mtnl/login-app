import { useState } from "react";
import "./styles/App.css";
import { initializeApp } from "firebase/app";
import Login from "./views/Login";
import "./styles/button.css";
import Home from "./views/Home";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhXNtH86zW_P3bteYaLdWbTUgy7DQ-70c",
  authDomain: "react-teaching.firebaseapp.com",
  projectId: "react-teaching",
  storageBucket: "react-teaching.appspot.com",
  messagingSenderId: "756104532290",
  appId: "1:756104532290:web:eb7703f19eb18f9e59b8db",
};

function App() {
  const [user, setUser] = useState(undefined);
  initializeApp(firebaseConfig);
  return <>{user ? <Home setUser={setUser} /> : <Login setUser={setUser} />}</>;
}

export default App;
