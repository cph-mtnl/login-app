import { useEffect, useState } from "react";
import "../styles/my-input.css";

export default function MyInput({
  id,
  label,
  type,
  name,
  value,
  setPropState,
  errorMessage,
}) {
  return (
    <div className="input--set">
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={setPropState}
        className={errorMessage ? "input--error" : ""}
      />
      {errorMessage && <p className="input--error--message">{errorMessage}</p>}
    </div>
  );
}
