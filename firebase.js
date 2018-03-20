import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAA3yInYo7RK2yoi4FPxZcpk0NCcSCV0mY",
  authDomain: "feh-team-manager.firebaseapp.com",
  databaseURL: "https://feh-team-manager.firebaseio.com",
  projectId: "feh-team-manager",
  storageBucket: "feh-team-manager.appspot.com",
  messagingSenderId: "816024887483"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
