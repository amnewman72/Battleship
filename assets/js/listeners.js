//use addEventListeners to listen for 
//   ◦ user clicks on the game board and then take the appropriate actions.


document.querySelector("#board tbody").addEventListener('click', e => {
	console.log("Table was clicked on");
	const tableElement = e.target;
	if ((tableElement !== null) && (tableElement.tagName.toLowerCase() ==  "td")) {
		getMove();
	}
});




