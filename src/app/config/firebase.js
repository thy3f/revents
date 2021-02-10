import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyB7xFJjEmxIWHNkdU99kp69LrcjfcxKdHo",
	authDomain: "reventscourse-fc36c.firebaseapp.com",
	projectId: "reventscourse-fc36c",
	storageBucket: "reventscourse-fc36c.appspot.com",
	messagingSenderId: "117253728333",
	appId: "1:117253728333:web:eecbfb371fbfb29bc11404",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
