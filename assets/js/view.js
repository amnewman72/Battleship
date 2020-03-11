
//-------------------------------VIEW.JS-----------------------------------------
//addClass(element, className) – adds a given class to an element if it does not have the class. Does nothing otherwise.
//removeClass(element, className) – removes a given class from an element if the class has it. Does nothing otherwise.
//addMessage(msg) – adds a given text (msg) to the message div.
//clearMessages – Removes all messages from the message div.
//markBox(element, mark) – Adds a mark message to a given game board box
//getUsername() - Searches the file URL for the "user" parameter, then sends it to the setUsername(username) function
//setUsername() - Displays the user's name on the game page below the "Battleship" text

function addClass(element, className) {
	if (element.classList)
		element.classList.add(className)
	else if (!hasClass(element, className)) element.className += " " + className
}

function removeClass(element, className) {
	if (element.classList) {
		element.classList.remove(className);
	} else if (hasClass(element, className)) {
		element.className == "";
	}
}

function addMessage(msg) {
	document.getElementById("messages").innerHTML += (msg + "<br>");
}

function clearMessages() {
	document.getElementById("messages").innerHTML = "Messages<br>";
}

function changeText(element, msg) {
	if (element !== null)
		element.innerHTML = msg;
}

function getUsername() {
	const url = window.location.search;
	const param = new URLSearchParams(url);
	const name = param.get('user');
	setUsername(name);
}

function setUsername(userName) {
	document.getElementById("playername").innerHTML = ("User: " + userName);
}

function markBox(element, mark) {
	if(element != null) {
		element.innerHTML = mark;
	}
}



