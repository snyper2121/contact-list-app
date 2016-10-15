$(document).foundation()

var contactList = [];


$( "#submit-button" ).on('click',function() {
  	var newContactObject = {
		fName: document.getElementById('fName').value,
		lName: document.getElementById('lName').value,
		phoneNumber: document.getElementById('phoneNumber').value,
		streetName: document.getElementById('streetName').value,
		cityName: document.getElementById('cityName').value,
		stateName: document.getElementById('stateName').value
	};

  	contactList.push(newContactObject);
  	console.log(contactList);
  	contactListRender = document.getElementById('contact-list');

  	renderContactList();
  	
  	document.getElementById("fName").value = "";
});


function renderContactList() {
	var listString = "";
	for (var i = 0; i < contactList.length; i++) {
		listString = listString +  "<li class='contact'><a id="+i+">" + contactDisplayName(contactList[i]) + "</a></li>";
	};
	document.getElementById("contact-list").innerHTML = listString;

	$('.contact').on('click', function(event) {
		console.log(event.target.id);
		console.log(contactList[Number(event.target.id)].fName);

		document.getElementById("display-info").innerHTML = 
		"<ul>"
			+ "<li>First Name:" + (contactList[Number(event.target.id)].fName) + "</li>"
			+ "<li>Last Name:" + (contactList[Number(event.target.id)].lName) + "</li>"
			+ "<li>Phone Number:" + (contactList[Number(event.target.id)].phoneNumber) + "</li>"
			+ "<li>Street Name:" + (contactList[Number(event.target.id)].streetName) + "</li>"
			+ "<li>City Name:" + (contactList[Number(event.target.id)].cityName) + "</li>"
			+ "<li>State Name:" + (contactList[Number(event.target.id)].stateName) + "</li>" +
		"</ul>";
});

}

function contactDisplayName(contactObj) {
	return contactObj.fName + " " + contactObj.lName;
}



