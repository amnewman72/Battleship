//Creates a Battleship ship object
var bShip = {
	name: "Battleship",
	length: 4,
	orientation: y,

	getName: function() {
		return this.name;
	},

	getLength: function() {
		return this.length;
	},

	getOrientation: function() {
		return this.orientation;
	},

	setOrientation: function(o) {
		this.orientation = o;
	},
};
//Creates a Destroyer ship object
var destroyer = {
	name: "Destroyer",
	length: 3,
	orientation: x,

	getName: function() {
		return this.name;
	},

	getLength: function() {
		return this.length;
	},

	getOrientation: function() {
		return this.orientation;
	},

	setOrientation: function(o) {
		this.orientation = o;
	},	
};
//Creates a Submarine ship object
var submarine = {
	name: "Submarine",
	length: 2,
	orientation: y,

	getName: function() {
		return this.name;
	},

	getLength: function() {
		return this.length;
	},

	getOrientation: function() {
		return this.orientation;
	},

	setOrientation: function(o) {
		this.orientation = o;
	},
};
//Creates a Cruiser ship object
var cruiser = {
	name: "Cruiser",
	length: 1,
	orientation: x,

	getName: function() {
		return this.name;
	},

	getLength: function() {
		return this.length;
	},

	getOrientation: function() {
		return this.orientation;
	},

	setOrientation: function(o) {
		this.orientation = o;
	},
};

//Creates a Battleship game object
var battleship = {
	var board = new Array(10),
	var bLives = 4,
	var dLives = 3,
	var sLives = 2,
	var cLives = 1,
	var bOrient, dOrient, sOrient, cOrient,
	var usedX = new Array(),
	var usedY = new Array();
	//Creates an empty 10x10 board as a 2D array
	initialize: function() {
		for(var i = 0; i < 10; i++) {
			board[i] = new Array(10);
			for(var j = 0; j < 10; j++) {
				board[i][j] = "";
			}
		}
		return board;
	},

	//Places ships on the board
	putShip: function(ship) {
		//Place Battleship
		var name = ship.name;
		var length = ship.length;
		var orientation = ship.orientation;
		var coordX, coordY;
		var shipspace = new Array();

		if (name == "Battleship") {
			for(var i = 0; i < usedX.length; i++) {
				board[usedX[i]][usedY[i]] = "B";
				usedX = [];
				usedY = [];
			}
		} else if (name == "Destroyer") {
			board[usedX[i]][usedY[i]] = "D";
			usedX = [];
			usedY = [];
		} else if (name == "Submarine") {
			board[usedX[i]][usedY[i]] = "S";
			usedX = [];
			usedY = [];
		} else if (name == "Cruiser") {
			board[usedX[i]][usedY[i]] = "C";
			usedX = [];
			usedY = [];
		}
	},

	//Gets the user's move by the class and ID of the element clicked and turns it into a recognizable spot on the board. It then handles hits, misses, sinks, and when the game is over.
	getMove: function() {
		var id = tableElement.id; //0-9
		var cl = tableElement.className; //A-J
		var newY;

		if(cl == "A") {
			newY = 0;
		} else if (cl == "B") {
			newY = 1;
		} else if (cl == "C") {
			newY = 2;
		} else if (cl == "D") {
			newY = 3;
		} else if (cl == "E") {
			newY = 4;
		} else if (cl == "F") {
			newY = 5;
		} else if (cl == "G") {
			newY = 6;
		} else if (cl == "H") {
			newY = 7;
		} else if (cl == "I") {
			newY = 8;
		} else if (cl == "J") {
			newY = 9;
		}

		if (board[id][newY] == "") {
			addMessage("Missed");
			addClass(tableElement, "missed");
			markBox(tableElement, "M");
		} else if (board[id][newY] != "") {
			addMessage("Hit");
		}

		if (board[id][newY] == "B") {
			bLives--;
			addClass(tableElement, "battleship");
			markBox(tableElement, "X");
			if (bLives == 0) {
				addMessage("You sunk the Battleship");
			}
		} else if (board[id][newY] == "D") {
			dLives--;
			addClass(tableElement, "destroyer");
			markBox(tableElement, "X");
			if (dLives == 0) {
				addMessage("You sunk the Destroyer");
			} 
		} else if (board[id][newY] == "S") {
				sLives--;
				addClass(tableElement, "submarine");
				markBox(tableElement, "X");
				if (sLives == 0) {
					addMessage("You sunk the Submarine");
				}
			} else if (board[id][newY] == "C") {
				addClass(tableElement, "cruiser");
				markBox(tableElement, "X");
				addMessage("You sunk the Cruiser");
			}

			if (bLives == 0 && dLives == 0 && sLives == 0 && cLives == 0) {
				addMessage("YOU WIN!");
			} 
		}

	//Creates the ships for them to be put on the board by setting coordinates for them to be placed on depending on the
	createShips: function() {
		//Create Battleship
		bOrient = Math.floor(Math.random() * 2);
		var x, y;
		if (bOrient == 1) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * (10 - bShip.getLength() + 1));
		} else {
			x = Math.floor(Math.random() * (10 - bShip.getLength() + 1));
			y = Math.floor(Math.random() * 10);
		}
		for (var i = 0; i < bShip.getLength(); i++) {
			if (bOrient == 1) {
				usedX.push(x);
				usedY.push(y + i);
			} else {
				usedX.push(x + i);
				usedY.push(y);
			}
		}

		battle = new Ship(bs, bShip.getLength(), bOrient);
		putShip(battle);

		//Create Destroyer
		dOrient = Math.floor(Math.random() * 2);
		if (dOrient == 1) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * (10 - destroyer.getLength() + 1));
		} else {
			x = Math.floor(Math.random() * (10 - destroyer.getLength() + 1));
			y = Math.floor(Math.random() * 10);
		}
		for (var i = 0; i < destroyer.getLength(); i++) {
			if (dOrient == 1) {
				usedX.push(x);
				usedY.push(y + i);
			} else {
				usedX.push(x + i);
				usedY.push(y);
			}
		}

		destroy = new Ship(ds, destroyer.getLength(), dOrient);
		putShip(destroy);

		//Create Submarine
		sOrient = Math.floor(Math.random() * 2);
		if (orient == 1) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * (10 - submarine.getLength() + 1));
		} else {
			x = Math.floor(Math.random() * (10 - submarine.getLength() + 1));
			y = Math.floor(Math.random() * 10);
		}
		for (var i = 0; i < submarine.getLength(); i++) {
			if (sOrient == 1) {
				usedX.push(x);
				usedY.push(y + i);
			} else {
				usedX.push(x + i);
				usedY.push(y);
			}
		}

		sub = new Ship(sm, submarine.getLength(), sOrient);
		putShip(sub);

		//Create Cruiser
		cOrient = Math.floor(Math.random() * 2);
		if (cOrient == 1) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * (10 - cruiser.getLength() + 1));
		} else {
			x = Math.floor(Math.random() * (10 - cruiser.getLength() + 1));
			y = Math.floor(Math.random() * 10);
		}
		for (var i = 0; i < cruiser.getLength(); i++) {
			if (cOrient == 1) {
				usedX.push(x);
				usedY.push(y + i);
			} else {
				usedX.push(x + i);
				usedY.push(y);
			}
		}

		cruise = new Ship(cr, cruiser.getLength(), cOrient);
		putShip(cruise);
	},


};

