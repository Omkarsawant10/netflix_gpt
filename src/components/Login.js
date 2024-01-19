import Header from "./Header";
import { useState } from "react";

const Login=()=>{
  const [isSignInForm,setisSignInForm]=useState(true);

  const toggleSignInForm=()=>{
       setisSignInForm(!isSignInForm);
  }
    return(
        <div>
          <Header/>

          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />
          </div>

          <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "SignIn":"SignUp"}</h1>

            {
             !isSignInForm &&  <input type="text" placeholder="Full Name" className="bg-gray-700 p-4 my-4 w-full" />
           }
            <input type="text" placeholder="Email Address" className="bg-gray-700 p-4 my-4 w-full" />
           
            <input type="password" placeholder="password" className="bg-gray-700 p-4 my-4 w-full"/>
            <button className="p-4 my-6 w-full bg-red-700 rounded-lg">{isSignInForm ? "SignIn":"SignUp"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registred?Sign In Now"}</p>
          </form>
        </div>
    )
}

export default Login;