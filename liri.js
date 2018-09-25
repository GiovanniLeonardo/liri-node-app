//read and set environment variables with the dotenv package
require("dotenv").config();
var fs = require("fs"); //to call filesystem to read/write files
var request = require("request");// request package
var moment = require("moment"); //use moment for MM/DD/YYYY
//pull and store my personal keys into a variable (Keys).
var keys = require("./keys.js"); 
//API request to Spotify
var Spotify = require("node-spotify-api");
//Access my key information 
var spotify = new Spotify(keys.spotify);

//Conert-this
var concert = function(artist) {
	//search Bands in Town Artist Events using API
	request ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
	function(error, response, body) {
		if (error) {
			console.log('Error occurred: ' + error);
		} else {
			var concertJson = JSON.parse(body);
			for (var i=0; i<concertJson.length; i++) {
			 
			//List of artist and render the following info about each event
			//Name of value, Venue Location, Date of Event using moment MM/DD/YYYY
			console.log('Venue: ', concertJson[i].venue.name);
			console.log('City: ', concertJson[i].venue.city);
			console.log('Date: ', moment(concertJson[i].datetime).format('MM/DD/YYYY')) 
			console.log('\n----------------')
		}
		}
	})
}

//create function for movie, if no movie selected, return default "Mr. Nobody".
var getMovie = function(movieName) {

	if(movieName == null) {
		movieName = "Mr. Nobody";
	}
//console test movie 
//	request('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy',	

	request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy', 
	function(error, response, body) {
		if (error) {
			console.log('Error occurred: ' + error);
		} else {
	//	 for(var i=0; i<movieName.length; i++) {
			console.log("Title: " + JSON.parse(body).Title);
			console.log('Released: ' + JSON.parse(body).Year);
			console.log('IMDB Rating: ' + JSON.parse(body).imdbRating);
		//	console.log('Rotten Tomatoes Rating: ' + JSON.parse(body).tomatoRating);
			console.log('Country Produced: ' + JSON.parse(body).Country);
			console.log('Language: ' + JSON.parse(body).Language);
			console.log('Plot: ' + JSON.parse(body).Plot);
			console.log('Actors: ' + JSON.parse(body).Actors);
			console.log('\n----------------')
		 }
		});
	}
//getMovie(process.argv[3]);
//  *** END MOVIE ***




//spotify-this-song, if null return default "The Sign"	
function spotifyThis(song){
 	if(song == null) {
 		song = "The Sign";
 	}
//search song and get song data
 spotify.search({ type: 'track', query: song}, 
 function(error, data) {
	 	if (error) {
	 		 console.log('Error occured: ' + error); 
	 		 return;
	 	} else {
			
			console.log('Artist: ' + data.tracks.items[0].artists[0].name);
			console.log('Song: ' + data.tracks.items[0].name);
			console.log('Album: ' + data.tracks.items[0].album.name);
			console.log('Preview URL: ' + data.tracks.items[0].preview_url)
			console.log('\n----------------')
		}
 })
};
  
//spotifyThis(process.argv[3]);

	

//LIRI take the text inside of random.txt and then use it to call the desired command
function doWhatItSays(){
	fs.readFile('random.txt', 'utf8', function(error, data){
 	spotifyThis(data);
 	});
//doWhatItSays();
}

 //var to hold the different arguments from user 
var select = function(caseSelect, functionSelect){
	//evaluate the cases/expression to run the specific command
	   switch (caseSelect) {
	 	  case 'movie-this' :
	 	  	  getMovie(functionSelect);
	 		  break;  
		
	 	 case 'spotify-this-song' :
	 		   spotifyThis(functionSelect);
	 		 break;
		
		case 'do-what-it-says' :
		 	doWhatItSays();
			 break;
			 
		case 'concert-this' :
			concert(functionSelect);
			break;

		default:
	 	console.log('Liri does not recognize this');
 		}
 }
	//var to pass argument into when arg(s) are picked
	 var runArg = function(firstArg, secondArg) {
	 	select(firstArg, secondArg);
  };
	
	//pass function argumen from user
 runArg(process.argv[2], process.argv[3]);
