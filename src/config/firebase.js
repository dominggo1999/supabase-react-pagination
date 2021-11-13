import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5-iEnrLq8EDjZkRh-n7MiNUvYd4p5gw4',
  authDomain: 'test-autho-2ad5c.firebaseapp.com',
  projectId: 'test-autho-2ad5c',
  storageBucket: 'test-autho-2ad5c.appspot.com',
  messagingSenderId: '279606500455',
  appId: '1:279606500455:web:9873e8c938d408310708c2',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// auth
export const auth = app.auth();
export const db = app.firestore();

export default app;
