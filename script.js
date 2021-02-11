function resultMessage(message, className) {
	var messageHtml = `
		<div class="alert alert-${className} mb-2">
			${message}
		<div/>
	`;

	var validationMessages = document.getElementById("validation_message");
	validationMessages.insertAdjacentHTML("beforeEnd", messageHtml);
}

function resetMessages() {
	var validationMessages = document.getElementById("validation_message");
	// console.log("aa");
	validationMessages.innerHTML = "";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
}

document.getElementById("button").addEventListener("click", function() {
	var values = document.getElementById("value").value;
	var userValue = values.split("\n");
	userValue = userValue.map(item => item.trim().split(","));

	var wrongAccount = new Map();	
	var correctAccount = [];

	userValue.forEach(function(item) {
		if(item.length != 5) {
			wrongAccount.set(item, "Missing information");			
		} else if(!isEmail(item[0])) {
			wrongAccount.set(item, "Email is not valid");			
		} else if(item[4] != "broker" && item[4] != "fan") {
			wrongAccount.set(item, "broker or fan");			
		} else {
			correctAccount.push(item);
		}
	});

	var msg = "";
	wrongAccount.forEach( function (value,key) {
		msg += `<li>${value} : ${key}</li>` 
	})

	resetMessages();
	resultMessage(`Saved (${correctAccount.length})
		<br/>
		<ul>
			${correctAccount.map(item => `<li>${item}</li>`).join("")}
		</ul>`, "success");

	resultMessage(`Wrong format for the accounts (${wrongAccount.size}) <br/>${msg}`, "danger");
});

	// ya da   *** Genel uyarı mesajı ve altına hatalı ve doğru account bilgileri ile hatanın ne olduğu bilgisi üç array ile

// document.getElementById("button").addEventListener("click", function() {
// 	var values = document.getElementById("value").value;
// 	var userValue = values.split("\n");
// 	userValue = userValue.map(item => item.trim().split(","));

// 	var wrongAccount = [];
// 	var correctAccount = [];
// 	var accountError = [];

// 	userValue.forEach(function(item) {
// 		if(item.length != 5) {
// 			wrongAccount.push(item);
// 			accountError.push("Missing information!");
// 		} else if(!isEmail(item[0])) {
// 			wrongAccount.push(item);
// 			accountError.push("Email is not valid");
// 		} else if(item[4] != "broker" && item[4] != "fan") {
// 			wrongAccount.push(item);
// 			accountError.push("broker or fan");
// 		} else {
// 			correctAccount.push(item);
// 		}
// 	});

// 	resultMessage(`Saved(${correctAccount.length})!
// 		<br/>
// 		<ul>
// 			${correctAccount.map(item => `<li>${item}</li>`).join("")}
// 		</ul>`, "success");

// 	resultMessage(`Wrong format for the accounts(${wrongAccount.length})!
// 		<br/>
// 		<ul>
// 			${wrongAccount.map((item,i) => `<li>${item} : ${accountError[i]}</li>`).join("")}
// 		</ul>`, "danger");
// });


	// ya da   *** Genel uyarı mesajı ve altına hatalı ve doğru account bilgileri

// document.getElementById("button").addEventListener("click", function() {
// 	var values = document.getElementById("value").value;
// 	var userValue = values.split("\n");
// 	userValue = userValue.map(item => item.trim().split(","));

// 	var wrongAccount = [];
// 	var correctAccount = [];

// 	userValue.forEach(function(item) {
// 		if(item.length != 5) {
// 			wrongAccount.push(item);
// 		} else if(!isEmail(item[0])) {
// 			wrongAccount.push(item);
// 		} else if(item[4] != "broker" && item[4] != "fan") {
// 			wrongAccount.push(item);
// 		} else {
// 			correctAccount.push(item);
// 		}
// 	});

// 	resultMessage(`Saved(${correctAccount.length})!
// 		<br/>
// 		<ul>
// 			${correctAccount.map(item => `<li>${item}</li>`).join("")}
// 		</ul>`, "success");

// 	resultMessage(`Wrong format for the accounts(${wrongAccount.length})!
// 		<br/>
// 		<ul>
// 			${wrongAccount.map(item => `<li>${item}</li>`).join("")}
// 		</ul>`, "danger");
// });

	// ya da   *** Her bir account için uyarı mesajı

// document.getElementById("button").addEventListener("click", function() {
// 	// console.log("ok");
// 	var values = document.getElementById("value").value;
// 	// console.log(values);

// 	var userValue = values.split("\n");
// 	// console.log(userValue);

// 	userValue = userValue.map(item => item.trim().split(","));
// 	// console.log(userValue);

// 	userValue = userValue.map(function(item, index) {
// 		// console.log(index, item);
// 		// console.log(item.length);

// 		if(item.length != 5) {
// 			resultMessage(`(${index+1}) Wrong format for the accounts! <br/> ${item}`, "danger");
// 		} else if(!isEmail(item[0])) {
// 			resultMessage(`(${index+1}) Wrong format for the accounts! <br/> ${item}`, "danger");
// 		} else if(item[4] != "broker" && item[4] != "fan") {
// 			resultMessage(`(${index+1}) Wrong format for the accounts! <br/> ${item}`, "danger");
// 		} else {
// 			resultMessage(`(${index+1}) Saved <br/> ${item}`, "success")
// 		}
// 	});
// });