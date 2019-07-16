import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAgbjm4nDEJl9g-Y_GianI1-VnLvLOWTeM',
  authDomain: 'dnsmasq.firebaseapp.com',
  databaseURL: 'https://dnsmasq.firebaseio.com',
  projectId: 'dnsmasq',
  storageBucket: 'dnsmasq.appspot.com',
  messagingSenderId: '780827435089',
  appId: '1:780827435089:web:145ccfbef8ca0b0c'
});

export default firebase;
