import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      var token = res.credential.accessToken;

      var { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((err) => {
      const signedInUser = {};
      signedInUser.error = err.message;
      signedInUser.success = false;

      return signedInUser;
    });
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(function () {
      const signedOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photoURL: "",
        error: "",
        success: false,
      };
      return signedOutUser;
    })
    .catch(function (error) {
      // An error happened.
    });
};

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;

      updateUserName(name);
      verifyEmail();
      //   toast.success("successfully created Account", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      return newUserInfo;
    })
    .catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;

      // ...
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;

      //   console.log("sign in user", res.user);
    })
    .catch(function (error) {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;

      return newUserInfo;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then((res) => {
      console.log("user name updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

const verifyEmail = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};

export const resetPassword = (email) => {
  var auth = firebase.auth();

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};
