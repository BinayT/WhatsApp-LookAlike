import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDePVxdvgRuRO3JVhXYBQORSQK8RMMbCv0',
  authDomain: 'whatsapp-lookalike.firebaseapp.com',
  projectId: 'whatsapp-lookalike',
  storageBucket: 'whatsapp-lookalike.appspot.com',
  messagingSenderId: '741125538387',
  appId: '1:741125538387:web:c968c96100563fbf647ca6',
  measurementId: 'G-XKR3Q1G76Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
