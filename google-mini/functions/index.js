'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({
	debug: true
});

app.intent('add ingredients', (conv, {any}) => {

});

app.intent('delete ingredients', (conv, {any}) => {

});

app.intent('delete all', (conv) => {
	
});

app.intent('get recipe', (conv) => {
	
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);