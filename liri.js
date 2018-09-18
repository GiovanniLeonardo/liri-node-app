//read and set environment variables with the dotenv package
require("dotenv").config();

var fs = require("fs"); //to call filesystem to read/write files
var request = require("request");// request package

//pull and store my personal keys into a variable (Keys).
var keys = require("./keys.js"); 

//API request to Spotify
var Spotify = require("node-spotify-api");

//use moment for MM/DD/YYYY
//var moment = require("moment");

//Access my key information 
var spotify = new Spotify(keys.spotify);

// store the arguments in the array
// var nodeArgs = process.argv;

//create a variable to hold song name (arg: Artist, Song, Album, Preview Link)
//var songs = "";

//create an empty variable for holding the movie name
//var movieName = "";

//create a variable to hold the artis name (arg: Name of venue, Location, Date of event (use moment to format this as MM/DD/YYYY))
var artistName = function(artist) {
    return artist.name;
}

//take user input for song title
var mySong = function(songName) {
	//if no song is provided, default to "The Sign" by Ace of Base.
	// if(songName == null )
	// 	value = "The Sign";
	//  console.log('title: ' + 'The Sign');

//search song and get song data
	spotify.search({ type: 'track', query: songName }, 
	function(err, data) {
		if (err) {
			 console.log('Error occured: ' + err); 
			 return;
		} 
			console.log(data.tracks.items[0]);
	
	
	var getSong = data.tracks.items;

	//console log list of attributes (artist, song name, url preview an album).
 	  for(var i = 0; i<getSong.length; i++) {
			console.log(i);
			console.log('artist: ' + getSong[i].artist.map(artistName));
			console.log('song: ' + getSong[i].name);
			console.log('album: ' + getSong[i].album.name);
			console.log('preview: ' + getSong[i].preview_url);
			console.log('\n================================');
 		}
	
})

var pick = function (caseData, functionData) {
	switch(caseData) {
		case 'Spotify-this-song':
		mySong(functionData);
		break;
		default:
		console.log('Title: ' .songName + 'The Sign');
	}
}
var runArg = function(argOne, argTwo)	{
	pick(argOne, argTwo);
};
runArg(process.argv[2], process.argv[3]);
//mySong(process.argv[2]);

// Spotify code above
};
