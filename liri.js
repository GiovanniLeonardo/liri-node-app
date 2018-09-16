//read and set environment variables with the dotenv package
require("dotenv").config();

var fs = require("fs"); //to call filesystem to read/write files

//pull and store my personal keys into a variable (Keys).
var keys = require("./keys.js"); 

//API request to Spotify
var Spotify = require("node-spotify-api");

//Access my key information 
var spotify = new Spotify(keys.spotify);

//take user input for song title
var mySong = function(songTitle) {

//show Artist, song name, preview link of the song, and the album that the song is from
	spotify.search({ type: 'track', query: songTitle }, 
	function(err, data) {
		if (err) {
			return console.log('Error occured: ' + err); 
		} 
		console.log(data.tracks.items[0]);		
	
// 		//Get songs and the attributes (artist, song name, url preview an album).
 		var songs = spotify 
 		for(var i = 0; i=songs.length; i++) {
			console.log(i);
			console.log('artist: ' + songs[i].artist);
			console.log('song: ' + songs[i].name);
			console.log('album: ' + songs[i].album.name);
			console.log('preview: ' + songs[i].preview_url);
 		};


var songPick = function(caseData, functionData) {
 	switch (caseData) {
 		case 'spotify-this-song':
 			mySong(functionData);
 			default:
 			console.log("Liri does not recognize this ");
	 }

   var getData = function(dataOne, dataTwo) {
 	songPick(dataOne, dataTwo);

 // } else // if no song is povied default to "The Sign" by Ace of Base.
 // default: 
 // console.log('title: ' spotify-this-song 'The Sign');

// //store arguments in an array
// var artist = process.argv;

// //create variable for holding the songs
// var songlist = "";
