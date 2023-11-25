import Button from "../button/button.componenet";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signUserIn,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const defFormFields = {
  email: "",
  passowrd: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defFormFields);
  const { email, passowrd } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !passowrd) {
      alert("All Fields required!");
      return;
    }
    try {
      const user = await signUserIn(email, passowrd);
      console.log("User signed in:", user.email);
    } catch (errorCode) {
      switch (errorCode) {
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        case "auth/user-not-found":
          alert("Incorrect email!");
          break;
        default:
          alert("Sign-in error!");
      }
    }
  };

  const logGoogleUser = async (event) => {
    event.preventDefault();
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Welcome Back</h2>
      <span>Log in fam</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Passowrd"
          type="password"
          required
          onChange={handleChange}
          name="passowrd"
          value={passowrd}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <Button type="submit">Log In</Button>
          <Button type="button" onClick={logGoogleUser} buttonType={"google"}>
            SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
