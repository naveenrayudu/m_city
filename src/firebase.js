import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyBlm38zGn7ZSlKDTUh7F7EVxWpG9rBAoSI',
	authDomain: 'm-city-783ed.firebaseapp.com',
	databaseURL: 'https://m-city-783ed.firebaseio.com',
	projectId: 'm-city-783ed',
	storageBucket: 'm-city-783ed.appspot.com',
	messagingSenderId: '240529334715'
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };
