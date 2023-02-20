import "./signin.form.styles.scss";

import { useState } from "react";
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
  signinAuthUserWithEmailAndPassword,
} from "../../routes/utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    try {
      await signinAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          alert("Wrong email or password.");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signinWithGoogle = async () => {
    await signinWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={onSubmitHandle}>
        <FormInput
          label="Email"
          required
          type="text"
          value={email}
          name="email"
          onChange={onChangeHandler}
        />

        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          name="password"
          onChange={onChangeHandler}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signinWithGoogle} type="button">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
