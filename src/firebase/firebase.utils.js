import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyB9GJEpx7q6Rshzk5mvCQ17Kbd-a-l8N9A",
    authDomain: "crwn-clothing-e7392.firebaseapp.com",
    databaseURL: "https://crwn-clothing-e7392.firebaseio.com",
    projectId: "crwn-clothing-e7392",
    storageBucket: "crwn-clothing-e7392.appspot.com",
    messagingSenderId: "443624815520",
    appId: "1:443624815520:web:cbac1d2c32dd145778c2c5",
    measurementId: "G-H2W1L7VST2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth)
		return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if(!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;