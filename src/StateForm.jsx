import { useState } from "react";
import { checkEmail, checkPassword } from "./validators";

export function StateForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();

    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
