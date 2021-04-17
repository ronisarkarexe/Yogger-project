import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../firebase.confige';
import './Login.css'
import icon from '../../../Icon/Group 573.png';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const Login = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   const history = useHistory();
   const location = useLocation();

   const { from } = location.state || { from: { pathname: "/" } };

   if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
   }

   const handelGoogleSignIn = () => {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
         const { displayName, email} = result.user;
         console.log(displayName, email);
         const signInUser = {
            name: displayName, 
            email: email,
         }
         setLoggedInUser(signInUser)
         history.replace(from);
      }).catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         var email = error.email;
         var credential = error.credential;
         console.log(error,errorMessage,errorCode,email,credential)
      });
   }

   return (
      <div class='container'>
         <button class="button-click" onClick={handelGoogleSignIn}> <img class="image-google" src={icon}/> Connect With Google</button>
         <p class="text-center mt-5">Back To Main Page <Link to="/">HOME</Link></p>
      </div>
   );
};

export default Login;