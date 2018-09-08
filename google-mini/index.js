'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({
	debug: true
});

app.intent('add ingredient', (conv, {unitinformationname}) => {
    conv.close('Test');
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);