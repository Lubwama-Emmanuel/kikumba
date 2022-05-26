import { signInWithGooglePopup } from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick ={logGoogleUser}>Sign Up With Google</button>
    </div>
  );
};
export default SignIn;
