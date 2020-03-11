//Creates a Battleship object, starting the game
var gamePlay = {
	var bs;
	//Starts up a new game
	playGame: function() {
		bs = new Battleship();
	},

	//Clears the message div and game board, then starts a new game
	reset: function() {
		clearMessages();
		var x = document.getElementById("board");
		removeClass(x, "battleship");
		removeClass(x, "destroyer");
		removeClass(x, "submarine");
		removeClass(x, "cruiser");
		playgame();
	}
};

