var firebase = require('firebase-admin');

var serviceAccount = require("./smile-more-firebase-adminsdk-m6uh6-ff33dface4.json");

firebase.initializeApp({
    apiKey: "AIzaSyARIdaAVbO3hHPdrb8Iff5XqSqAi4_H1bo",
    authDomain: "smile-more.firebaseapp.com",
    databaseURL: "https://smile-more.firebaseio.com",
    projectId: "smile-more",
    storageBucket: "smile-more.appspot.com",
    messagingSenderId: "559898718653",
    credential: firebase.credential.cert(serviceAccount)
});

var functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })

exports.getMessages = functions.https.onRequest((req, res) => {
    // Create a new post reference with an auto-generated id
    var messageList = firebase.database().ref('incoming/');
    var newMessage = messageList.push();
    newMessage.set(req.query);
    res.status(200).end()
});