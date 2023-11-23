import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../../sign-up-form/sign-up-form.component";
import Button from "../../componentsMain/button/button.componenet";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser} buttonType={"google"}>SignIn</Button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
