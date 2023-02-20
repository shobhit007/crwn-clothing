import SignupForm from "../../components/sign-up-form/signup.form.component";
import SigninForm from "../../components/sign-in-form/signin.form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
