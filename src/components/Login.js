import React, { useRef } from 'react'
import Header from './Header';
import { useState } from 'react';
import { CheckData } from '../utils/CheckData';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';





const Login = () => {
  
  const dispatch = useDispatch();
    const [toggleSign, setToggleSign] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
  const date = useRef(null);
    const handleSubmit = () => {
        //validate data
        const isValid = CheckData(email.current.value, password.current.value);
        setErrorMessage(isValid);
      if (isValid !== null) return;
      if (!toggleSign) {
        //Sign-up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name.current.value)
          .then((userCredential) => {
            // Signed up
            
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL:
                "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
            })
              .then(() => {
                // Profile updated!
                const { uid, displayName, email, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
           
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      }
      else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
        
        
    }
    const handleSign = () => {
      setToggleSign(!toggleSign);
    };
    return (
      <>
        <div>
          <Header />

          <div className="absolute w-screen">
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              className="opacity-80"
            />
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-32 pb-10 bg-black bg-opacity-80 text-white"
          >
            <h3
              className="font-bold text-3xl py-4 cursor-pointer"
              onClick={handleSign}
            >
              {toggleSign ? "Sign In" : "Sign Up"}
            </h3>
            {toggleSign ? (
              <>
                <input
                  ref={email}
                  type="email"
                  placeholder="Email-Id"
                  className="bg-gray-500 p-2 my-2 w-full"
                />
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="bg-gray-500 p-2 my-2 w-full"
                />
                <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
                <button
                  className="bg-red-800 w-full p-2 my-4"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <input
                  ref={name}
                  type="text"
                  placeholder="Name"
                  className="bg-gray-500 p-2 my-2 w-full"
                />
                <input
                  ref={date}
                  type="date"
                  placeholder="Date Of Birth"
                  className="bg-gray-500 p-2 my-2 w-full"
                />
                <input
                  ref={email}
                  type="email"
                  placeholder="Email-Id"
                  className="bg-gray-500 p-2 my-2 w-full"
                />
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="bg-gray-500 p-2 my-2 w-full"
                />
                <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
                <button
                  className="bg-red-800 w-full p-2 my-4"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </>
            )}
            <span className="text-s cursor-pointer" onClick={handleSign}>
              {toggleSign
                ? "New here ? Click here to Register"
                : "Shall we Login ?"}
            </span>
          </form>
        </div>
      </>
    );
}

export default Login
