import './authentication.styles.scss'
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';

const SignIn = () => {
  return (
    <div className="authContainer">
      <div className="authContainerInner">
          <SignInForm />
          <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
