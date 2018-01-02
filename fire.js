import firebase from 'firebase'

var config = { 
    apiKey: "AIzaSyAym-AbH9VSvUs1gNgP1j3YjYhJHSp4U_s",
    authDomain: "butterfly-vr.firebaseapp.com",
    databaseURL: "https://butterfly-vr.firebaseio.com",
    projectId: "butterfly-vr",
    storageBucket: "butterfly-vr.appspot.com",
    messagingSenderId: "497056695439"
};

var fire = firebase.initializeApp(config);

export default fire;