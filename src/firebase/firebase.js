import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from ' firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAVhjiyE5Yrwx-_1iUUecIRTp6-cHNKZ6g",
  authDomain: "insta-clone-97213.firebaseapp.com",
  projectId: "insta-clone-97213",
  storageBucket: "insta-clone-97213.appspot.com",
  messagingSenderId: "181435133656",
  appId: "1:181435133656:web:4465dde58541590ebdf1ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};