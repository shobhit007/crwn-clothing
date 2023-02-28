import "./signup.form.styles.scss";

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth({
        ...user,
        displayName,
      });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use.");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Create an account with email and password</span>
      <form onSubmit={onSubmitHandle}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={onChangeHandler}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={onChangeHandler}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
