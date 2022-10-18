// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAo9Mgx4Q5CPF8lxk_awZPFgKxKp5tJCMk',
	authDomain: 'mementica3d-db4af.firebaseapp.com',
	projectId: 'mementica3d-db4af',
	storageBucket: 'mementica3d-db4af.appspot.com',
	messagingSenderId: '987108084886',
	appId: '1:987108084886:web:55ee4710f3b7c912e086b7',
	measurementId: 'G-NYQT0S5MQX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
