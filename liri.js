//read and set environment variables with the dotenv package
require("dotenv").config();

var fs = require("fs"); //to call filesystem to read/write files
var request = require("request");// request package

//pull and store my personal keys into a variable (Keys).
var keys = require("./keys.js"); 

//API request to Spotify
var Spotify = require("node-spotify-api");

//Access my key information 
var spotify = new Spotify(keys.spotify);

// store the arguments in the array
var nodeArgs = process.argv;

//create a variable to hold the artis name (arg: Name of venue, Location, Date of event (use moment to format this as MM/DD/YYYY))
var artist = "";

//create a variable to hold song name (arg: Artist, Song, Album, Preview Link)
var songs = "";

//create an empty variable for holding the movie name
var movieName = "";

//take user input for song title
var mySong = function(songTitle) {
	//if no song is provided, default to "The Sign" by Ace of Base.
	if(songTitle == null )
		value = "The Sign";
	// console.log('title: ' + 'The Sign');

//search song and get song data
	spotify.search({ type: 'track', query: songTitle }, 
	function(err, data) {
		if (err) {
			return console.log('Error occured: ' + err); 
		} 
		console.log(data.tracks.items[0]);	
	var getData = data.tracks.items;

	//console log list of attributes (artist, song name, url preview an album).
 
 	  for(var i = 0; i<getData.length; i++) {
			console.log(i);
			console.log('artist: ' + getData[i].artist);
			console.log('song: ' + getData[i].name);
			console.log('album: ' + getData[i].album.name);
			console.log('preview: ' + getData[i].preview_url);
 		};
	})
};

mySong();
