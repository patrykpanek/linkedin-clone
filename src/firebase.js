import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyCaS2PDkQ6PIusid0tU42SCeom8R-SoJkU',
  authDomain: 'linkedin-clone-221a2.firebaseapp.com',
  projectId: 'linkedin-clone-221a2',
  storageBucket: 'linkedin-clone-221a2.appspot.com',
  messagingSenderId: '139366653958',
  appId: '1:139366653958:web:708d734ac25d62123b6387',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
