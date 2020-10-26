import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAbd5gqIEbpd2fdeQtkDVrLN-UtPP5OAIM",
    authDomain: "e-commerce-db-90730.firebaseapp.com",
    databaseURL: "https://e-commerce-db-90730.firebaseio.com",
    projectId: "e-commerce-db-90730",
    storageBucket: "e-commerce-db-90730.appspot.com",
    messagingSenderId: "587121405549",
    appId: "1:587121405549:web:10b06671b58071acfdd964",
    measurementId: "G-KLVH56GG4N"
  }

  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({ 
                displayName,
                email,
                createdAt,
                ...additionalData
             })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

