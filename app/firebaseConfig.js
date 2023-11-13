import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5E3jULF9FEzngKCbjnbOKrl7Q8EJruP8',
  authDomain: 'weight-warrior-dcb03.firebaseapp.com',
  projectId: 'weight-warrior-dcb03',
  storageBucket: 'weight-warrior-dcb03.appspot.com',
  messagingSenderId: '193916357371',
  appId: '1:193916357371:web:87b4d5db86912750c67e5e',
  measurementId: 'G-N9V6ZW3XQP',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
