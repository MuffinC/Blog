import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth, initializeAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvkZq_7s1C4YcL2fLzvIt2qjDxYLuxb7M",
    authDomain: "react-blog-71ed0.firebaseapp.com",
    projectId: "react-blog-71ed0",
    storageBucket: "react-blog-71ed0.appspot.com",
    messagingSenderId: "396658121816",
    appId: "1:396658121816:web:dc1b3e19164fa924bf3e2d",
    measurementId: "G-GK36YFY4P1"
  };

  const app = initializeAuth(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {auth, db, storage};