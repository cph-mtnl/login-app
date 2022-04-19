import { useState } from "react";
import usePropState from "../hooks/usePropState";
import "../styles/sign-up-modal.css";
import validateSignUpInfo, {
  validateConfirmation,
  validateEmail,
  validatePassword,
} from "../utils/validateSignUpInfo";
import MyInput from "./MyInput";

export default function SignUpModal({ close }) {
  const rootId = "sign_up";
  const [errors, setErrors] = useState({});
  const [info, setPropInfo, setInfo] = usePropState({
    email: "",
    password: "",
    confirmation: "",
  });

  function idFor(subId) {
    return `${rootId}_${subId}`;
  }

  function handleValidation() {
    console.log("running validation");
    const emailError = validateEmail(info.email);
    const passwordError = validatePassword(info.password);
    const confirmationError = validateConfirmation(
      info.password,
      info.confirmation
    );
    setErrors({
      emailError,
      passwordError,
      confirmationError,
    });
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
          <button onClick={handleValidation}>Sign up</button>
          <h3 className="stolen-color alt-button" onClick={close}>
            Cancel
          </h3>
        </div>
      </div>
    </div>
  );
}
