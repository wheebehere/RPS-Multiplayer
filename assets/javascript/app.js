// Declares the tallies to 0 
var userOneWins = 0;
var userOneLosses = 0;
var userOneTies = 0;
var userTwoWins = 0;
var userTwoLosses = 0;
var userTwoTiess = 0;

// When the userOne presses the key it records the keypress and then sets it to userGuessOne
// I'm thinking maybe a temporary write to the Firebase data for both users before you do a compare?
// Otherwise, how am I going to know which user sent which answer?
document.onkeyup = function(event) {
	var userGuessOne = String.fromCharCode(event.keyCode).toLowerCase();

	// This is the second user's guess.
	var userGuessTwo = String.fromCharCode(event.keyCode).toLowerCase();
	// Making sure userOne and userTwo chooses r, p, or s
	if ((userGuessOne == 'r') || (userGuessOne == 'p') || (userGuessOne == 's')) && ((userGuessTwo == 'r') || (userGuessOne == 'p') || (userGuessOne == 's')) {

		// It tests to determine if userOne or userTwo won the round and then increments 
		if ((userGuessOne == 'r') && (userGuessTwo == 's')){
			userOneWins++;
			userTwoLosses++;
		}else if ((userGuessOne == 'r') && (userGuessTwo == 'p')){
			userOneLosses++;
			userTwoWins++;
		}else if ((userGuessOne == 's') && (userGuessTwo == 'r')){
			userOneLosses++;
			userTwoWins++;
		}else if ((userGuessOne == 's') && (userGuessTwo == 'p')){
			userOneWins++;
			userTwoLosses++;
		}else if ((userGuessOne == 'p') && (userGuessTwo == 'r')){
			userOneWins++;
			userTwoLosses++;
		}else if ((userGuessOne == 'p') && (userGuessTwo == 's')){
			userOneLosses++;
			userTwoWins++;
		}else if (userGuessOne == userGuessTwo){
			userOneTies++;
			userTwoTies++;
		}  

		// Taking the tallies and displaying them in HTML
		// userOneScreen
		var html = "<p>Press r, p or s to start playing</p>" +
		"<p>: " + 
		userOneWins + 
		"</p>" +
		"<p>: " + 
		userOneLosses + 
		"</p>" +
		"<p>: " + 
		userOneTies + 
		"</p>";
		//need to include a read to the server to display their overall scores


		// Taking the tallies and displaying them in HTML
		// userTwoScreen
		var html = "<p>Press r, p or s to start playing</p>" +
		"<p>: " + 
		userTwoWins + 
		"</p>" +
		"<p>: " + 
		userTwoLosses + 
		"</p>" +
		"<p>: " + 
		userTwoTies + 
		"</p>";
		//need to include a read to the server to display their overall scores


		// Placing the html into the game ID
		// This would have to be done to each user's screen based on their
		// firebase server information
		document.querySelector('#game').innerHTML = html;

	}
}