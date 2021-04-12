import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBOo_vsNDFM4I3-PBgVgDWKbdRNUZayHkU",
    authDomain: "clone-83ae7.firebaseapp.com",
    projectId: "clone-83ae7",
    storageBucket: "clone-83ae7.appspot.com",
    messagingSenderId: "664608211494",
    appId: "1:664608211494:web:4e0f038805d0bc6293dce7"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth};
