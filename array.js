
//ARRAY

// array declaration

//first method
var testArray = new Array("Cat", "Dog", "Cow", "Lion", "Tiger", "Leo", "Goat", "Deer");
console.log(testArray);

//second method
var secondMethod = ["Hen", "Dove", "Snake"];
console.log(secondMethod);

//changing value in array
secondMethod[2] = "Pigeon";
console.log(secondMethod);

//finding array length
console.log("Array length is: " + secondMethod.length);
console.log("Array length is: " + secondMethod["length"]);

//accessing array elements
for(var i = 0; i<secondMethod.length; i++){
    console.log("Array elements are: " + secondMethod[i]);
}

//adding elements in an array
secondMethod.push("Parrot");
console.log("The new array is: " + secondMethod);

//adding elements in the first position of an array
secondMethod.unshift("Crow");
console.log("Added in the first place: " + secondMethod);

//removing items from the last in an array
console.log("Removed the last element: " + secondMethod.pop());
console.log("New array is: " + secondMethod);

//removing items from the front in an array
console.log("Removed the first element: " + secondMethod.shift());
console.log("New array is: " + secondMethod);

//finding index of an element
console.log("Index of Dove is: " + secondMethod.indexOf("Dove"));

//removing elements with index
secondMethod.splice(1, 2);
console.log("New array is: " + secondMethod);

//functionality of splice 
var exapmpleSplice = testArray.splice(3);
console.log("After splice new array is: " + testArray);
console.log("Splice array is: " + exapmpleSplice);