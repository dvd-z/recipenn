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
			success: function(data) {},
			error: function(data) {
				conv.ask('An error occurred, unable to add items.');
			}
		)
	}
});

app.intent('remove ingredients', (conv, {any}) => {
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
		success: function(data) {},
		error: function(data) {
			conv.ask('An error occurred, unable to remove items.');
		}
	)
});

app.intent('remove all', (conv) => {
	data = {
		'username': username
	}
	data = JSON.stringify(data);

	$.ajax(
		type: post,
		url: url,
		data: data,
		async: false,
		success: function(data) {},
		error: function(data) {
			conv.ask('An error occurred, unable to remove all items.');
		}
	)
});

app.intent('get recipe', (conv) => {
	var data;

	$.ajax(
		type: get,
		url: url,
		data: data,
		async: false,
		success: function(data) {
			conv.ask('The recipe found was: ' + data.name);
		},
		error: function(data) {
			conv.ask('An error occurred, unable to get recipe.');
		}
	)
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);