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
console.log(people.slice(4,5));

// For loop to iterate over array
for(i=0; i<people.length; i++) {
    console.log(people[i]);
}

// Array problem set

// Write a print reserve function that takes an array as an argument

var numbersListings = [1,2,3,4,5,6,7,8];

function printReverse(listChain) {
    var newNumberListings = [];
    for(step=listChain.length-1;step >= 0;step-=1) {
        newNumberListings.push(listChain[step]);
    }
    return newNumberListings;
}

console.log(printReverse(numbersListings));
console.log(printReverse(["a","b","c","d"]));


// Write an isUniform function to check if all the contents in an array are the same

function isUniform(listOfItems) {
    for (element = 1; element <= listOfItems.length - 1; element++) {
        if (listOfItems[0] !== listOfItems[element]) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1,1,1,1,1,1,1,1,1,1]));

// Write a sumArry

function sumArray(arrayToBeSummed) {
    var init = 0;
    for(index=0;index<=arrayToBeSummed.length-1;index++) {
       init+=arrayToBeSummed[index];
    }
    return init;
}

console.log(sumArray([10,3,10,4]));


// The function below returns the maximum number within an array
function max(inArrayInQuestion) {
    var isBiggest = inArrayInQuestion[0];

    for(instance=1;instance<inArrayInQuestion.length;instance++) {

        if(inArrayInQuestion[instance] > isBiggest) {
            isBiggest = inArrayInQuestion[instance]
            //continue;  //Looks like I didn't need that continue statement after all...
        }

    }
    return isBiggest;
}

console.log(max([-5,100,10000,3,4,6])); // SHOULD print out 10000