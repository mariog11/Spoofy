var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var fs = require('fs');

var loadedFiles = false;

const redirect_uri = 'https://spoofyrest.herokuapp.com/callback/';
const client_uri = 'https://spoofy-client.firebaseapp.com/browse';
const spotify_base_uri = 'https://api.spotify.com/v1';

var my_client_id = null;
var my_client_secret = null;

var access_token = null;
var refresh_token = null;

function writeTokenFile(callback) {
	fs.writeFile('tokens.json', JSON.stringify({access_token: access_token, refresh_token: refresh_token}), callback);
}

function readTokenAndClientSecretFiles(callback) {
	fs.readFile('client_secret.json', (err, data) => {
		data = JSON.parse(data);
		my_client_id = data.client_id;
		my_client_secret = data.client_secret;
		fs.readFile('tokens.json', (err, data) => {
			data = JSON.parse(data);
			access_token = data.access_token;
			refresh_token = data.refresh_token;
			callback();
		});
	});
}

function refresh(callback, res) {
	var _headers = {
		'Authorization': 'Basic ' + Buffer.from(my_client_id + ':' + my_client_secret).toString('base64')
	};

	const params = new URLSearchParams();
	params.append('grant_type','refresh_token');
	params.append('refresh_token', refresh_token);

	return new Promise(function(resolve, reject){
		fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: _headers,
			body: params
		}).then(response => response.json())
		.then(function(info){
			//When the fetch() promise completes, parse the response.
			access_token = info.access_token;
			//Then, use writeTokenFile() to write the token file. Pass it a callback function for what should occur once the file is written.
			writeTokenFile(function(){
				//Once the token is written, redirect the user back to the Angular client with res.redirect().
				res.redirect(client_uri);
			});
			resolve(info.statuses);
		}).catch(function(error){
			return error.message;
		});
	});
}

function makeAPIRequest(spotify_endpoint, res) {
	var headers = {
		'Content-Type':'application/x-www-form-urlencoded',
		'Authorization': 'Bearer ' + access_token
	};

	res.set('Cache-Control','public, max-age=300, s-maxage=600');

	return new Promise(function(resolve, reject){
		fetch(spotify_endpoint, {
			method: 'GET',
			headers: headers
		}).then(res=>{
			return res.json();
		}).then(info=>{
			if(info.hasOwnProperty('error')){
				throw info['error']['status'];
			}
			return res.json(info);
		//Once refresh() is working, check whether the status code is 401 (unauthorized)
		}).catch(function(error){
			//If so, refresh the access token and make the API call again.
			refresh(function(){
				_this.makeAPIRequest(spotify_endpoint, res);
			}, res);
			return error.message;
		});
	});
}
 
router.get('*', function(req, res, next) {
	//Applies to all endpoints: load the token and client secret files if they haven't been loaded.
	if(!loadedFiles) {
		readTokenAndClientSecretFiles(function() {
			loadedFiles = true;
			next();
		});
	}
	else {
		next();
	}
});

router.get('/login', function(req, res, next) {
	var scopes = 'user-read-private user-read-email user-top-read user-library-read user-follow-read playlist-read-private playlist-read-collaborative';

	res.redirect('https://accounts.spotify.com/authorize' +
	  '?response_type=code' +
	  '&client_id=' + my_client_id +
	  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
	  '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

router.get('/callback', function(req, res, next) {
	var code = req.query.code || null;

	const params = new URLSearchParams();
	params.append('code', code);
	params.append('redirect_uri', redirect_uri);
	params.append('grant_type', 'authorization_code');

	var _headers = {
		'Content-Type':'application/x-www-form-urlencoded',
		'Authorization': 'Basic ' + Buffer.from(my_client_id + ':' + my_client_secret).toString('base64')
	};

	return new Promise(function(resolve, reject){
		fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: _headers,
			body: params
		}).then(response => response.json())
		.then(function(info){
			access_token = info.access_token;
			refresh_token = info.refresh_token;
			writeTokenFile(function(){
				res.redirect(client_uri);
			});
			resolve(info.statuses);
		}).catch(function(error){
			return error.message;
		});
	});
});
 
router.get('/', function(req, res, next) {
	res.send('Go to the <a href="/login">login page</a> to begin the oAuth flow.');
});

/* 
	Account Detail
*/
router.get('/me', function(req, res, next) {
	makeAPIRequest(spotify_base_uri + '/me', res);
});

/*
	Browse
*/
router.get('/featured-playlists', function(req, res, next) {
	makeAPIRequest(spotify_base_uri + '/browse/featured-playlists', res);
});

/*
	Search
*/
router.get('/search/:category/:resource', function(req, res, next) {
	var resource = req.params.resource;
	var category = req.params.category;
	var params = new URLSearchParams();
	params.append('q', resource);
	params.append('type', category);
	makeAPIRequest(spotify_base_uri + '/search?' + params, res);
});

/*
	Tracks Section
*/
router.get('/user-tracks', function(req, res, next) {
	makeAPIRequest(spotify_base_uri + '/me/tracks', res);
});

router.get('/track/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/tracks/' + id, res);
});

router.get('/track-audio-features/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/audio-features/' + id, res);
});

/*
	Albums Section
*/
router.get('/user-albums', function(req, res, next) {
	makeAPIRequest(spotify_base_uri + '/me/albums', res);
});

router.get('/album/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/albums/' + id, res);
});

router.get('/album-tracks/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/albums/' + id + '/tracks', res);
});

/*
	Artists Section
*/
router.get('/user-artists', function(req, res, next) {
	makeAPIRequest(spotify_base_uri + '/me/following?type=artist', res);
});

router.get('/artist/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/artists/' + id, res);
});

router.get('/artist-related-artists/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/artists/' + id + '/related-artists', res);
});

router.get('/artist-albums/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/artists/' + id + '/albums', res);
});

router.get('/artist-top-tracks/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/artists/' + id + '/top-tracks?country=US', res);
});

/*
	Playlists Section
*/
router.get('/user-playlists', function(req, res, next) {
	makeAPIRequest(spotify_base_uri + '/me/playlists', res);
});

router.get('/playlist/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/playlists/' + id, res);
});

router.get('/playlist-tracks/:id', function(req, res, next) {
	var id = req.params.id;
	makeAPIRequest(spotify_base_uri + '/playlists/' + id + '/tracks', res);
});

module.exports = router;
