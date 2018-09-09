'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({
	debug: true
});

// Username and ingredients ** stringify
// app.intent('add ingredients', (conv, {any}) => {
	// if (any.length < 0) {
	// 	;
	// }
	// conv.ask(any);
// });

// // Username and ingredients
// app.intent('remove ingredients', (conv, {any}) => {

// });

// // Username
// app.intent('remove all', (conv) => {
	
// });

// app.intent('get recipe', (conv) => {
	
// });

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);