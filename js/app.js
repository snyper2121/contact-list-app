$(document).foundation()

var contactList = {};



$( "#submitButton" ).on('click',function() {
  	var newContactObject = {
		fName: document.getElementById('fName').value,
		lName: document.getElementById('lName').value,
		phoneNumber: document.getElementById('phoneNumber').value,
		streetName: document.getElementById('streetName').value,
		cityName: document.getElementById('cityName').value,
		stateName: document.getElementById('stateName').value
	};

  	contactList.push(newContactObject);
  	contactListRender = document.getElementById('contactList');

  //	var listString = "";

	for (var i = 0; i < contactList.length; i++) {
		var listString = "";
		listString = listString +  "<li id="+i+"><a>" + contactDisplayName(contactList[i]) + "</a></li>";
	};

});


function contactDisplayName(contactObj) {
	return contactObj.fName + " " + contactObj.lName;
}


function 
