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


