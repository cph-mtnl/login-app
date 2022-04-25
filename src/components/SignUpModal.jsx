import { useState } from "react";
import usePropState from "../hooks/usePropState";
import "../styles/sign-up-modal.css";
import {
  validateConfirmation,
  validateEmail,
  validatePassword,
} from "../utils/validateSignUpInfo";
import MyInput from "./MyInput";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import MyButton from "./MyButton";
import useKeypress from "../hooks/useKeypress";
import ErrorBox from "./ErrorBox";
import translateFirebaseError from "../utils/translateFirebaseError";

export default function SignUpModal({ close, setUser }) {
  const rootId = "sign_up";
  const auth = getAuth();
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [info, setPropInfo, setInfo] = usePropState({
    email: "",
    password: "",
    confirmation: "",
  });

  useKeypress("Enter", handleSignUp);

  function idFor(subId) {
    return `${rootId}_${subId}`;
  }

  function handleSignUp() {
    const isValid = isFormValid();
    if (isValid) {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, info.email, info.password)
        .then((userCredential) => {
          setFirebaseError("");
          setUser(userCredential.user);
        })
        .catch((error) => {
          setFirebaseError(translateFirebaseError(error.code));
        })
        .finally(() => setIsLoading(false));
    }
  }

  function isFormValid() {
    const errorObj = {
      emailError: validateEmail(info.email),
      passwordError: validatePassword(info.password),
      confirmationError: validateConfirmation(info.password, info.confirmation),
    };

    setErrors(errorObj);

    const hasErrors = Object.values(errorObj).filter(
      (item) => item !== undefined
    );

    return hasErrors.length === 0;
  }

  return (
    <div className="modal">
      <div className="modal--container">
        <div className="modal--content">
          <h1>Sign up</h1>
          <MyInput
            id={idFor("email")}
            label="Cph Business email"
            type="email"
            name="email"
            value={info.email}
            setPropState={setPropInfo}
            errorMessage={errors.emailError}
          />
          <MyInput
            id={idFor("password")}
            label="Password"
            type="password"
            name="password"
            value={info.password}
            setPropState={setPropInfo}
            errorMessage={errors.passwordError}
          />
          <MyInput
            id={idFor("password_confirm")}
            label="Confirm password"
            type="password"
            name="confirmation"
            value={info.confirmation}
            setPropState={setPropInfo}
            errorMessage={errors.confirmationError}
          />
          {firebaseError && <ErrorBox errorMsg={firebaseError} />}
          <MyButton
            text={"Sign up"}
            onClick={handleSignUp}
            loading={isLoading}
            className={"mt-15"}
          />
          <h3 className="stolen-color alt-button" onClick={close}>
            Cancel
          </h3>
        </div>
      </div>
    </div>
  );
}
