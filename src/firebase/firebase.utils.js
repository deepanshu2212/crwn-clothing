import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAb5s_A1jr7XkuABbykBR6s0Bzkn2P5mlo",
    authDomain: "crwn-db-73366.firebaseapp.com",
    databaseURL: "https://crwn-db-73366.firebaseio.com",
    projectId: "crwn-db-73366",
    storageBucket: "crwn-db-73366.appspot.com",
    messagingSenderId: "405099114231",
    appId: "1:405099114231:web:31438d4b1aebeb9116adf2",
    measurementId: "G-5F1VRCWJ0V"
};

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
                ...additionalData
            })

        } catch (error) {
            console.log('Error Creating User', error.message);
            
        }

    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;