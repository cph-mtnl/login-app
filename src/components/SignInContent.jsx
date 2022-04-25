import MyInput from "./MyInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import usePropState from "../hooks/usePropState";
import { useState } from "react";
import MyButton from "./MyButton";
import useKeypress from "../hooks/useKeypress";
import ErrorBox from "./ErrorBox";
import translateFirebaseError from "../utils/translateFirebaseError";

export default function SignInContent({ setUser }) {
  const auth = getAuth();
  const [firebaseError, setFirebaseError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [info, setPropInfo, setInfo] = usePropState({
    email: "",
    password: "",
  });

  useKeypress("Enter", handleSignIn);

  function handleSignIn() {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, info.email, info.password)
      .then((userCredential) => {
        setFirebaseError("");
        setUser(userCredential.user);
      })
      .catch((error) => {
        setFirebaseError(translateFirebaseError(error.code));
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <h1>Log på Appster 2000</h1>
      <MyInput
        id="email"
        label="Email"
        type="email"
        name="email"
        value={info.email}
        setPropState={setPropInfo}
      />
      <MyInput
        id="password"
        type="password"
        label="Password"
        name="password"
        value={info.password}
        setPropState={setPropInfo}
      />
      {firebaseError && <ErrorBox errorMsg={firebaseError} />}
      <MyButton
        text={"Login"}
        onClick={handleSignIn}
        loading={isLoading}
        className={"mt-15"}
      />
    </>
  );
}
