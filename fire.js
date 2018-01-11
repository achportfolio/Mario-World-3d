import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGyQC3I04aHcOA2d7TQhxMJfyILMJqqfs",
    authDomain: "marioworld3d-faaed.firebaseapp.com",
    databaseURL: "https://marioworld3d-faaed.firebaseio.com",
    projectId: "marioworld3d-faaed",
    storageBucket: "marioworld3d-faaed.appspot.com",
    messagingSenderId: "86458910176"
  };
  
var fire = firebase.initializeApp(config);

export default fire;