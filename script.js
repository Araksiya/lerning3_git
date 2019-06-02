 //script that prompts the user to guess the number that will be generated. Report Success
 var max = 10,
 min = 1,
rand = Math.random() * (max-min) + min,
rounded = Math.round(rand);
var answer = +prompt('Guess a number?');
console.log(rounded === answer);    

// Check for compliance with the two requested values 
var a = 'string';
var b = 54;
console.log(a===b); 



//currency script
var currency = prompt('give UAH', '');
alert('we get ' + currency /26 + ' USD!');



//Request the introduction of numbers and find their arithmetic average
var a = prompt('first number', '');
var b = prompt('second number', '');
console.log((+a + +b)/2);



