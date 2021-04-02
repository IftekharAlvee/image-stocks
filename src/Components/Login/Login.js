import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../Home/Home";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  if(loggedInUser.email !== ""){
      console.log(loggedInUser);
  }

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const { displayName, email } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
          itemName: loggedInUser.itemName,
        itemPrice: loggedInUser.itemPrice
        };

        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div>
      <Container>
        <h1>Welcome to Authentication page</h1>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
      </Container>
    </div>
  );
};

export default Login;
