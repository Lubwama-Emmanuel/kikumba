import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXiNSmQ183PzPI9yt7uPGxPhjtqyfUYIU",
  authDomain: "kikumba-178fa.firebaseapp.com",
  projectId: "kikumba-178fa",
  storageBucket: "kikumba-178fa.appspot.com",
  messagingSenderId: "218815189805",
  appId: "1:218815189805:web:c70bd3917b32bd6e69f9a4",
  measurementId: "G-3ER4SJR780",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
