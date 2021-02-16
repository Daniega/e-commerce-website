import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
console.log(API_KEY);

const config = {
    apiKey: `${API_KEY}`,
    authDomain: "e-commerce-db-90730.firebaseapp.com",
    databaseURL: "https://e-commerce-db-90730.firebaseio.com",
    projectId: "e-commerce-db-90730",
    storageBucket: "e-commerce-db-90730.appspot.com",
    messagingSenderId: "587121405549",
    appId: "1:587121405549:web:10b06671b58071acfdd964",
    measurementId: "G-KLVH56GG4N",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    //we need to output the array to an object for our reducer, the titles of the collections are the keys for the corresponding collection
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

/* added SHOP_ITEMS from shop.data.js to firebase, ***ran only once*** to add the data that we need */

// export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey);
// 	const batch = firestore.batch();
// 	console.log(objectsToAdd);

// 	objectsToAdd.forEach((obj) => {
// 		const newDocRef = collectionRef.doc();
// 		console.log(newDocRef);
// 	});

// 	// return await batch.commit();
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
