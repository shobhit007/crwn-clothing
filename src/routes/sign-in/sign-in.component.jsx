import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.util";

const SignIn = () => {
  const logUserWithGoogle = async () => {
    const { user } = await signinWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logUserWithGoogle}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
