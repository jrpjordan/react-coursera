import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = (props) => {
  return props.password.isTouched ?
      !props.password.value || props.password.value.length < 8 ?
        (
        <p className="FieldError">Password should have at least 8 characters</p>
        )
      :
        ''
    : 
      '';
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const handlePasswordChange = (e) => {
    setPassword({
      value: e.target.value,
      isTouched: true
    });
  }

  const handleOnFocusPassword = (e) => {
    setPassword({ ...password, isTouched: true })
  }

  const handleOnBlurPassword = (e) => {
    if (!password.value || password.length === 0) {
      setPassword({...password, isTouched: false})
    }
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSelect = (e) => {
    setRole(e.target.value);
  }

  const getIsFormValid = () => {
    // Implement this function
    return firstName && firstName.length > 0
      && lastName && lastName.length > 0
      && validateEmail(email)
      && ((role === 'individual') || (role === 'business'))
      && password && password.value.length > 8;
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({
      value: "",
      isTouched: false
    })
    setRole("role")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={handleFirstName} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={handleLastName} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={handleEmail} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" type="password" value={password.value} onChange={handlePasswordChange} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword}/>
            <PasswordErrorMessage password={password} />
          </div>

          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={handleSelect} value={role}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
