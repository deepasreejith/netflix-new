import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/a9a1a456-16bc-4ecc-9612-8a8af8411f81/AE-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-2 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
        {isSignInForm? "Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm? "New to Netflix?Sign Up Now":"Already Registered?Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
