import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInput from "../components/componentsMain/form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../components/componentsMain/button/button.componenet";


const defaultFormFields = {
  displayName: "",
  email: "",
  passowrd: "",
  confirmPassword: "",
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, passowrd, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passowrd !== confirmPassword) return;

    try {
      const authUser = await createAuthUserWithEmailAndPassword(
        email,
        passowrd
      );
      const userDocRef = await createUserDocumentFromAuth(authUser.user, {
        displayName,
      });

      setFormFields(defaultFormFields);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Dont have an account?</h2>
      <span>Sign Up loser</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Passowrd"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
