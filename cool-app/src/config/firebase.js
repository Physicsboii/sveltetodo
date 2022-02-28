import { initializeApp } from 'firebase/app';
import { collection, getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import 'firebase/firestore'
import 'firebase/auth'

import { firebaseConfig } from './settings'

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const colref = collection(db,'todos')
export { db, auth,GoogleProvider,colref}
