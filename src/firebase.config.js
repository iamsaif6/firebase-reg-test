// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMgCLDTafksPjpfdYAzj7bpjsqpxDqTmQ',
  authDomain: 'react-newuser.firebaseapp.com',
  projectId: 'react-newuser',
  storageBucket: 'react-newuser.appspot.com',
  messagingSenderId: '859355170671',
  appId: '1:859355170671:web:7ada155d21444eb5bd4a9a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
