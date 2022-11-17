
import { initializeApp } from "firebase/app";

import {
	getAuth,
	signInWithPopup , 
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

import { 
	getDoc, 
	getFirestore, 
	doc,
	setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfj9ktjtPVOZ58kkL15wsNX2FVZtpdMIA",
  authDomain: "expense-tracker-18093.firebaseapp.com",
  projectId: "expense-tracker-18093",
  storageBucket: "expense-tracker-18093.appspot.com",
  messagingSenderId: "361657699748",
  appId: "1:361657699748:web:b3bf46f1c7d1e119e64531"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();

export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth , googleProvider); 

export const createUserDocumentFromAuth = async(userAuth , additionalInformation = {}) => {
  	if(!userAuth) return;

  	const userDocRef = doc(db , 'users' , userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if(!userSnapshot.exists()) {
		const {displayName , email} = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation
			})
		} catch (error) {
			console.log('error creating the user ' , error.message);
		}
	}

	return userSnapshot;
}


export const createAuthUserWithEmailAndPassword = async(email , password) => {
	if(!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
}


export const siginInAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => {
    await signOut(auth);
}


export const getCurrentUser = () => {
	return new Promise((resolve , reject) => {
		const unsubcribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubcribe();
				resolve(userAuth);
			},
			reject
		)
	})
}