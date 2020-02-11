console.log("Hello World");
// Creating a variable name with value Muzaffar
var name = "Muzaffar";
console.log(name);

// String
var city = "pj";
console.log(city);
// String concatenation - combining variable to string
var message = "My name is " + name
console.log(message);
// You can declare string with "" or '' 
var hobby = "movie";
console.log(hobby);

var sentences = "He's coming today";
var anotherSentence = 'He says "hello"';
console.log(sentences);
console.log(anotherSentence);

// Number

var a = 10
var b = 3

var sum = a + b
console.log(sum);

var minus = a - b
console.log(minus);

var times = a * b
console.log(times);

var division = a / b
console.log(division);

var modulo = a % b
console.log(modulo);  //remainder of division

// Boolean (true or false)
var eaten = false
console.log(eaten);

// if else statement
if(eaten == true){
  console.log("I'm full");
}
else{
  console.log("I'm hungry");
}

// Example with cinema
var age = 12;
if (age <18){
  console.log("You cannot enter");
}
else{
  console.log("You may enter");
}
if (age < 13){
  console.log("You cannot enter");
}
else if (age < 18){
  console.log("You may enter with parents");
}    
else{
  console.log("You may enter")
}

// Exercise 
var ticket = 100
var age = 27
if (age < 18){
  console.log("For child below 18, ticket price is RM" + ticket * 0.5);
}
else if (age < 41){
  console.log("For 19 - 40 years old, ticket price is RM" + ticket);
}
else if (age < 66){
  console.log("For 41-65 years old, ticket price is RM" + ticket * 0.75)
}
else {
  console.log("For senior citizen above 66, ticket price is RM" + ticket * 0.5)
}

// For loop - repetition
// from 0, until 10, every iteration add by 1
for (var i=0; i<10; i++){
  //print show the number
  console.log(i);
}

// Create a for loop that will show all odd numbers from 1 to 10
for (var i=1; i<10; i+=2){
    console.log(i);
}

console.log("Next Exercise");

// Exercise 2
var table = 4
var lines = 13
for (var i=1; i<lines; i++){
  console.log(i + " x " + table + " = " + i*table);
}

console.log("Next Exercise");


// Exercise 3

for (var i=1; i<101; i++){
  if(i%3 && i%5 == 0){
    console.log("FizzBuzz");
  }
  else if(i%3 == 0){
    console.log("Fizz");
  }
  else if(i%3 == 0){
    console.log("Buzz");      
  }
  else{
    console.log(i);
  }
}


