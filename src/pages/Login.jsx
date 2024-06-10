import Signin from "../features/authentication/Signin";
import Navbar from "../features/landingPage/Navbar";

function Login() {
  return (
    <div className="mx-20 my-6">
      <Navbar />
      <Signin />
    </div>
  );
}

export default Login;
