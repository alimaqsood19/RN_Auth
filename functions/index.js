const admin = require('firebase-admin'); //Allows access to the service client, allows
//access to all the info in firebase
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json'); //The admin info

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://onetimepassword-11dd9.firebaseio.com'
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
//Telling firebase theres a new google cloud function called createUser
exports.createUser = functions.https.onRequest(createUser);
