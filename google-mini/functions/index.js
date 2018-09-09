'use strict';

const get = 'GET';
const post = 'POST';
const url = '';
const username = 'main';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({
	debug: true
});

app.intent('add ingredients', (conv, {any}) => {
	if (any.length > 0) {
		data = {
			'username': username,
			'ingredients': any
		};
		data = JSON.stringify(data);

		$.ajax(
			type: post,
			url: url,
			data: data,
			async: false,
			success: function(data) {
				conv.ask('Added items to your list.');
			},
			error: function(data) {
				conv.ask('An error occurred, unable to add item.');
			}
		)
	}
});

app.intent('remove ingredients', (conv, {any}) => {
	data = {
		'username': username,
		'ingredients': any,
	};
	data = JSON.stringify(data);

	$.ajax(
		type: post,
		url: url,
		data: data,
		async: false,
		success: function(data) {
			conv.ask('Removed items from your list.');
		},
		error: function(data) {
			conv.ask('An error occurred, unable to add item.');
		}
	)
});

// Username
app.intent('remove all', (conv) => {
	
});

app.intent('get recipe', (conv) => {
	
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);