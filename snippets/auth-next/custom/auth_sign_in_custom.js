// This snippet file was generated by processing the source file:
// ./auth-next/custom.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_sign_in_custom_modular]
import { getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth(firebaseApp);
signInWithCustomToken(auth, token)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
// [END auth_sign_in_custom_modular]