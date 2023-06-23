import { useState, useRef } from "react";
import { checkEmail, checkPassword } from "./validators";


export function RefForm () {
   const emailRef = useRef()
   const passwordRef = useRef()

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();

    const emailResults = checkEmail(emailRef.current.value);
    const passwordResults = checkPassword(passwordRef.current.value);

    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    if (emailResults.length === 0 && passwordResults.length === 0) {
        alert('success')
    }
  }

  return (
    <form onSubmit={onSubmit} class="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label class="label" htmlFor="email">
          Email
        </label>
        <input
          class="input"
          type="email"
          id="email"
          ref={emailRef}
        />
        {emailErrors.length > 0 && (
          <div class="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label class="label" htmlFor="password">
          Password
        </label>
        <input
          class="input"
          ref={passwordRef}
          type="password"
          id="password"
        />
        {passwordErrors.length > 0 && (
          <div class="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>
      <button class="btn" type="submit">
        Submit
      </button>
    </form>
  );
}