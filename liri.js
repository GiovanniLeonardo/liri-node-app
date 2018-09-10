//code to read and set environment variables with the dotenv package
//require("dotenv").config();

//var fs = require("fs"); //to call filesystem 

//pull and store my personal keys into a variable (Keys).
var keys = require("./keys.js"); 

//Spotify API requests
var Spotify = require("node-spotify-api"); 

//Access my key information by runnin the Spotify request
//var spotify = new Spotify(keys.spotify);

var spotify = new Spotify({
  id: '798de653df784a528f2b1d7e283bb21f',
  secret: '680664038d534968aa4811c5237aff9d'
});


var userChoice = function(songName) {


//show Artist, song name, preview link of the song, and the album that the song is from
	spotify.search({ type: 'track', query: songName }, function(err, data){
	 	if (err) {
			console.log('Error occurred: ' + err);
			return;
	}
	console.log(data);
});
}

// 		//variable to pull songs and the attributes (artist, song name, url preview an album).
// 		var songs = data.tracks.items; 
// 		for(var i = 0; i=songs.length; i++) {
// 			console.log(i);
// 			console.log('artist: ' + songs[i].artist.map(artist));
// 			console.log('song: ' + songs[i].name);
// 			console.log('preview: ' + songs[i].preview_url);
// 			console.log('album: ' + songs[i].album.name);
// 		}
		
// 	});
// }	

// var songPick = function(caseData, functionData) {
// 	switch (caseData) {
// 		case 'spotify-this-song':
// 			userChoice(functionData);
// 			// statements_1
// 			break;
// 		default:
// 			// statements_def
// 			break;
// 				console.log("Liri does not recognize this ");
//	}
//	}
 // var run = function(argOne, argTwo) {
 // 	songPick(argOne, argTwo);

// };

 // } else // if no song is povied default to "The Sign" by Ace of Base.
 // default: 
 // console.log('title: ' spotify-this-song 'The Sign');

// //store arguments in an array
// var artist = process.argv;

// //create variable for holding the songs
// var songlist = "";




