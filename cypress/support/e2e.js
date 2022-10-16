//https://zenn.dev/ucwork/articles/21b7caaeb1cc61#github-actions
import firebase from "firebase/app";
import "firebase/auth";

const config = {
   apiKey: Cypress.env("FIREBASE_API_KEY"),
};

if (!firebase.apps.length) {
   firebase.initializeApp(config);
}

if (process.env.NODE_ENV !== "production") {
   const auth = firebase.auth();
   auth.useEmulator(Cypress.env("FIREBASE_AUTH_EMULATOR_URL"));
}

export const signInWithEmailAndPassword = async (email, password) => {
   return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const createUserWithEmailAndPassword = async (email, password) => {
   return await firebase.auth().createUserWithEmailAndPassword(email, password);
};