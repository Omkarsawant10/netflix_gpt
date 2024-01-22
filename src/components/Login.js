import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVTAR_LOGO } from "../utils/constants";

const Login=()=>{
  const [isSignInForm,setisSignInForm]=useState(true);

  const [errorMessage,seterrorMessage]=useState(null);

  
  const dispatch=useDispatch();

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  const handleButtonClick=()=>{
     //validate form data
    //  checkValidData()
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message=checkValidData(email.current.value,password.current.value);
    seterrorMessage(message);
    if(message) return;

    //Sign In Sign Up Logic
    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    

    updateProfile(user, {
      displayName: name.current.value, photoURL:AVTAR_LOGO,
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL} = auth.currentUser;
      
      dispatch(addUser({
        uid:uid,
        email:email,displayName:displayName,photoURL:photoURL
      }));
      
    }).catch((error) => {
      // An error occurred
      // ...
      seterrorMessage(error);
    });
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
    
    // ..
  });


    }else{
      //Sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
  });

    }
    
  }
  const toggleSignInForm=()=>{
       setisSignInForm(!isSignInForm);
       
  }
    return(
        <div>
          <Header/>

          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />
          </div>

          <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "SignIn":"SignUp"}</h1>

            {
             !isSignInForm &&  <input ref={name} type="text" placeholder="Full Name" className="bg-gray-700 p-4 my-4 w-full" />
           }
            <input ref={email} type="text" placeholder="Email Address" className="bg-gray-700 p-4 my-4 w-full" />
           
            <input ref={password} type="password" placeholder="password" className="bg-gray-700 p-4 my-4 w-full"/>
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "SignIn":"SignUp"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registred?Sign In Now"}</p>
          </form>
        </div>
    )
}

export default Login;