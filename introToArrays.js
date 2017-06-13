// Arrays: Type of data structure holding many types of data such as var, num, bool, ..., even functions???
// Suppose I want to list a group of people

var person1 = "Michael";
var person2 = "Michelle";
var person3 = "David";
var person4 = "Rachel";

var people = [person1, person2, person3, person4];
// people stores the identifiers of the names of 4 people

console.log(people[2]);

// Built-in functions for arrays
people.push("William!");
console.log(people);
people.push("Some Guy");
console.log(people);
people.pop(); // Get's rid of "Some Guy" buh-bye...
console.log(people); // He's gone :D

people.unshift("Lemme cut in line and be upfront...");
console.log(people);
// Get the cutter outta here!!!
people.shift();
console.log(people); //He gone......

// Where is William??
console.log(people.indexOf("William!"));