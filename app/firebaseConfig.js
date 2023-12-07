import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC5E3jULF9FEzngKCbjnbOKrl7Q8EJruP8',
  authDomain: 'weight-warrior-dcb03.firebaseapp.com',
  projectId: 'weight-warrior-dcb03',
  storageBucket: 'weight-warrior-dcb03.appspot.com',
  messagingSenderId: '193916357371',
  appId: '1:193916357371:web:87b4d5db86912750c67e5e',
  measurementId: 'G-N9V6ZW3XQP',
  databaseURL:
    'https://weight-warrior-dcb03-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const rtdb = getDatabase(app);

export { db, rtdb };
