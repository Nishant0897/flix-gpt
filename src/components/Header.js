import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
          
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
      dispatch(removeUser());
      navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = () => {
    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute flex flex-wrap  w-screen h-30 bg-gradient-to-b from-black z-10 justify-between">
      <div className="w-2/12">
        <img
          alt=""
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      {user && (<div className="flex flex-wrap mr-5">
        <button className="h-[60px] text-yellow-50" onClick={handleSubmit}>
          <h3>Sign-out</h3>
        </button>

        <img
          className="h-[60px] w-[60px] p-3 rounded-lg"
          alt=""
          src={user.photoURL}
        />
      </div>)}
    </div>
  );
}

export default Header;
