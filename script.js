// Question One //

var num1 = 12;
var num2 = 8.7;
console.log(num1 + num2);

var str1 = "Hello ";
var str2 = "Ognian.";
console.log(str1 + str2);


// Question Two //

var guitaristsArray = ["John Petrucci", "Tosin Abasi", "Guthrie Govan"];
var drummersArray = ["Mike Portnoy", "Chris Pennie", "Gavin Harrison"];
var multiArray = [guitaristsArray, drummersArray];

console.log(multiArray[0][2]);
console.log(multiArray[1][0]);


// Questions Three and Four //

var userInput = prompt("Enter a number.");

if (userInput < 100) {
	alert('Your number is less than 100.');
} else if (userInput > 100) {
	alert('You entered ' + userInput + ', which is greater than 100.');
} else if (userInput == 100) {
	alert('You entered 100!');
} else {
	alert('Not sure if that was a number.');
}


// Question Five //

var userStr = prompt("Enter a string.");

if (userStr === "a string.") {
	alert("You typed a string. Well done!");
} else {
	alert("You typed " + userStr + ", which is not what I had in mind.");
}


// Question Six //

var userName = prompt("Enter a name.");

function repeatName(text) {
	alert("The name you entered was " + text + ".");
}

repeatName(userName);


// Question Seven //

function messageConsole() {
	console.log("I hope you're having a good day.");
}
messageConsole();


